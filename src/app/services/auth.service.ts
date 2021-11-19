import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timer, from, merge, Observable, Subject, concat } from 'rxjs';
import { concatAll, map, share, tap } from 'rxjs/operators';
import { AuthType, IAuthNotification } from './i-auth-notification';
import { IAuthRequest } from './i-auth-request';
import { ISession } from './i-session';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _sessions: Observable<ISession>;
  private readonly _baseAdress = 'api/Authentication/';
  private readonly _key = 'session';
  private _baerer: string = '';

  public get Sessions(): Observable<ISession> {
    return this._sessions;
  }

  private authRequest = new Subject<IAuthNotification>();

  constructor(httpClient: HttpClient) {
    let storedSessionPipe = from([localStorage.getItem(this._key)]).pipe(
      map((storageString) => {
        if (storageString != null) {
          return httpClient
            .get<ISession>(this._baseAdress + 'test', {
              headers: { Authorization: 'Bearer ' + storageString },
            })
            .pipe(map((_) => JSON.parse(storageString) as ISession));
        } else {
          return httpClient.get<ISession>(this._baseAdress + 'login/guest');
        }
      })
    );

    let loginPipe = this.authRequest.pipe(
      map((notification) =>
        httpClient.post<ISession>(
          this._baseAdress + 'login/user',
          notification.Request
        )
      )
    );

    let preObservable = concat(storedSessionPipe, loginPipe).pipe(
      concatAll(),
      share()
    );
    let timerPipe = preObservable.pipe(
      map((session) => timer(session.ExpireDate).pipe(map((_) => session))),
      concatAll(),
      map((_) => httpClient.get<ISession>(this._baseAdress + 'refresh')),
      concatAll()
    );
    this._sessions = merge(preObservable, timerPipe).pipe(
      tap((session) => {
        localStorage.setItem(this._key, JSON.stringify(session));
        this._baerer = 'Bearer ' + session.Token;
      }),
      share()
    );
  }

  public AuthorizeHeader(header: HttpHeaders): void {
    header.set('Authorization', this._baerer);
  }

  private static GetCorrectUrl(baseAdress: string, type: AuthType): string {
    if (type == AuthType.Guest) return baseAdress + 'login/guest';
    if (type == AuthType.Login) return baseAdress + 'login/user';

    throw new Error('Not supported login type: ' + type);
  }
}
