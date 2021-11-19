import { Component, Input, OnInit } from '@angular/core';
import { IBoardCardViewModel } from './i-board-card.view-model';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent implements OnInit {
  @Input() Model: IBoardCardViewModel | undefined;

  constructor() {}

  ngOnInit(): void {}
}
