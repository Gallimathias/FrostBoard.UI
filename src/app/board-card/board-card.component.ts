import { Component, Input, OnInit } from '@angular/core';
import { IBoardCard } from '../model/IBoardCard';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent implements OnInit {

  @Input() Model: IBoardCard;
  
  constructor() { }

  ngOnInit(): void {
  }

}
