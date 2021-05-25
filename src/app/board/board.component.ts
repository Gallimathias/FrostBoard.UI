import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IBoardViewModel } from './i-board.view-model';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnDestroy {
  Model: IBoardViewModel = {
    Id: 0,
    CardLists: [],
  };
  private readonly logIds: Subscription;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService
  ) {
    let requestedIds = this.route.paramMap.pipe(
      map((params) => Number(params.get('id')))
    );
    this.logIds = this.boardService
      .Get(requestedIds)
      .pipe(tap((board) => (this.Model = board)))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.logIds.unsubscribe();
  }
}
