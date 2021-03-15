import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBoard } from '../model/IBoard';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  Model: IBoard;
  private logIds: Subscription;
  
  constructor(private route: ActivatedRoute) {
    this.logIds = this.route.paramMap.subscribe((params) => {
      console.info(params.get('id'));
    });
  }

  

  ngOnInit(): void {
    this.Model = {
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
            },
            {
              Id: 1,
              Name: 'Das schwarze Brett',
              Topics: 1,
              Contributions: 163,
              Description: 'Ankündigungen jeder Art',
            },
            {
              Id: 2,
              Name: 'Support und Spielhilfen',
              Topics: 12,
              Contributions: 137,
              Description:
                'Spielhilfen und Sammelthreads, die sich direkt auf die Simulation beziehen',
            },
          ],
        },
        {
          Title: 'Anmeldung',
          BoardCards: [
            {
              Id: 3,
              Name: 'Anmeldung',
              Topics: 32,
              Contributions: 280,
              Description:
                'Hier meldet ihr euren Staat an. Bitte achtet auf die Anmelderegelung.',
            },
            {
              Id: 4,
              Name: 'Kartenplatzvergabe',
              Topics: 4,
              Contributions: 184,
              Description:
                'Die aktuelle Karte, sowie Bedingungen für die Eintragung findet ihr hier.',
            },
          ],
        },
      ],
    };
    
  }
}
