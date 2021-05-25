import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timer, from, merge, Observable, Subject } from 'rxjs';
import { concatAll, map, share, tap } from 'rxjs/operators';
import { IAuthRequest } from './i-auth-request';
import { ISession } from './i-session';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _sessions: Observable<ISession>;
  private readonly _baseAdress = 'api/Authentication/';
  private readonly _key = 'session';
  private _baerer: string;

  public get Sessions(): Observable<ISession> {
    return this._sessions;
  }

  private authRequest = new Subject<IAuthRequest>();

  constructor(private httpClient: HttpClient) {
    let sessionPipe = from([localStorage.getItem(this._key)]).pipe(
      map((storageString) => {
        if (storageString) {
          return httpClient
            .get<ISession>(this._baseAdress + 'test', {
              headers: { Authorization: 'Bearer ' + storageString },
            })
            .pipe(map((res) => JSON.parse(storageString) as ISession));
        } else {
          return httpClient.get<ISession>(this._baseAdress + 'login/guest');
        }
      })
    );

    let loginPipe = this.authRequest.pipe(
      map((request) =>
        httpClient.post<ISession>(this._baseAdress + 'login/user', request)
      )
    );

    let preObservable = merge(sessionPipe, loginPipe).pipe(concatAll());
    let timerPipe = preObservable.pipe(
      map((session) =>
        timer(session.ExpireDate).pipe(map((number) => session))
      ),
      concatAll(),
      map((session) => httpClient.get<ISession>(this._baseAdress + 'refresh')),
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
}
