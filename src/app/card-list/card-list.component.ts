import { Component, Input, OnInit } from '@angular/core';
import { IBoardCard } from '../model/IBoardCard';
import { ICardList } from '../model/ICardList';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {  
  @Input() Model: ICardList;
  constructor() { }

  ngOnInit(): void {
  }

}
