import { Component, Input, OnInit } from '@angular/core';
import { ICardListViewModel } from './i-card-list.view-model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {  
  @Input() Model: ICardListViewModel;
  constructor() { }

  ngOnInit(): void {
  }

}
