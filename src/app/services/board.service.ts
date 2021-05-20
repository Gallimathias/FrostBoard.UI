import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { IBoardViewModel } from '../board/i-board.view-model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor() {}

  public GetList(): Observable<IBoardViewModel[]> {
    return from([this.demoBoads]);
  }
  public Get(requestedIds: Observable<number>): Observable<IBoardViewModel> {
    return requestedIds.pipe(
      mergeMap((id) =>
        from(this.demoBoads).pipe(filter((board) => board.Id == id))
      )
    );
  }

  private demoBoads: IBoardViewModel[] = [
    {
      Id: 0,
      CardLists: [
        {
          Title: 'Organisatorisches',
          BoardCards: [
            {
              Id: 0,
              Name: 'Wichtige Informationen',
              Topics: 4,
              Contributions: 13,
              Description: 'Die Rahmenbedingungen von Virtual States',
              AvatarUrl:
                'https://www.virtual-states.de/wcf/images/avatars/ff/160-ff2ec54eb3608e75a9f529621730b48461030f99.jpg',
              LastTopic: 'Was ist überhaupt Virtual States?',
              LastUser: 'Virtual States',
              LastDate: new Date(2020, 3, 26),
            },
            {
              Id: 1,
              Name: 'Das schwarze Brett',
              Topics: 2,
              Contributions: 167,
              Description: 'Ankündigungen jeder Art',
              AvatarUrl:
                'https://www.virtual-states.de/wcf/images/avatars/18/307-18508319b76ee25244556d6bcd85bc84069b1c27.png',
              LastTopic: 'Änderungen / News',
              LastUser: 'Ace Industries',
              LastDate: new Date(2021, 3, 11),
            },
            {
              Id: 2,
              Name: 'Support und Spielhilfen',
              Topics: 12,
              Contributions: 140,
              Description:
                'Spielhilfen und Sammelthreads, die sich direkt auf die Simulation beziehen',
              AvatarUrl:
                'https://www.virtual-states.de/wcf/images/avatars/ed/6-edbaa1e6e09cba531185a75c569563443221f23b.png',
              LastTopic: 'Länderübersicht',
              LastUser: 'Wolkowisches Reich',
              LastDate: new Date(2021, 3, 10),
            },
          ],
        },
        {
          Title: 'Anmeldung',
          BoardCards: [
            {
              Id: 3,
              Name: 'Anmeldung',
              Topics: 33,
              Contributions: 287,
              Description:
                'Hier meldet ihr euren Staat an. Bitte achtet auf die Anmelderegelung.',
              AvatarUrl:
                'https://www.virtual-states.de/wcf/images/avatars/f8/320-f88e181c397ac7548f2724675cba4bfc9059851e.png',
              LastTopic: 'Arx Domini',
              LastUser: 'Arx Domini',
              LastDate: new Date(2021, 3, 9),
            },
            {
              Id: 4,
              Name: 'Kartenplatzvergabe',
              Topics: 4,
              Contributions: 187,
              Description:
                'Die aktuelle Karte, sowie Bedingungen für die Eintragung findet ihr hier.',
              AvatarUrl:
                'https://www.virtual-states.de/wcf/images/avatars/c8/277-c8dd35878c96fc7c445b93df806b848d307109e4.png',
              LastTopic: 'Beantragung des Kartenplatzes',
              LastUser: 'Astoria',
              LastDate: new Date(2021, 3, 29),
            },
          ],
        },
      ],
    },
  ];
}
