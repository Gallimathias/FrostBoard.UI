import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, publish, share, tap } from 'rxjs/operators';
import { EditorDialogComponent } from '../editor/editor-dialog/editor-dialog.component';
import { IPage } from '../paging/i-page';
import { Paginator } from '../paging/paginator';
import { PostDataService } from '../services/post-data.service';
import { IThreadViewModel } from './i-thread.view-model';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss'],
})
export class ThreadComponent implements AfterViewInit, OnInit, OnDestroy {
  // @ViewChild('scrollframe', { static: false }) scrollFrame: ElementRef;
  // @ViewChild('paginator', { static: false }) paginator: MatPaginator;

  private pageChanged = new Subject<PageEvent>();
  private sizeChanged = new Subject<number>();
  // private scrollContainer: Element;

  Model: IThreadViewModel = {
    PageChanged: this.pageChanged,
    Paginator: Paginator.from({ Total: 0, Size: 10, Length: 1 }),
    Posts: [],
  };
  private readonly subscriptions: Subscription;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private dataService: PostDataService
  ) {
    this.subscriptions = new Subscription();

    console.log('Ctor call');
    this.Model.CurrentPage = new PageEvent();
    this.Model.CurrentPage.pageIndex = 0;

    let pageChanged = this.pageChanged.pipe(
      map((pageChanged) => {
        return {
          Index: pageChanged.pageIndex,
          Size: pageChanged.pageSize,
        } as IPage;
      }),
      tap((v) => console.log('PageChanged'))
    );

    let dataSubscription = dataService
      .Get(pageChanged)
      .pipe(tap((v) => console.log('New View')))
      .subscribe((page) => (this.Model.Posts = page.Data));

    let paginatorSubscription = dataService
      .Paginate(this.sizeChanged)
      .pipe(tap((v) => console.log('New Pagination')))
      .subscribe((paginator) => {
        this.Model.Paginator = Paginator.from(paginator);

        if (!this.Model.CurrentPage) return;

        this.Model.CurrentPage.pageSize = this.Model.Paginator.Size;
        this.OnPageChanged(this.Model.CurrentPage);
      });

    this.subscriptions.add(dataSubscription);
    this.subscriptions.add(paginatorSubscription);
  }

  ngOnInit(): void {
    this.sizeChanged.next(this.Model.Paginator.Size);
  }

  ngOnDestroy(): void {
    this.pageChanged.complete();
    this.subscriptions.unsubscribe();
  }

  ngAfterViewInit(): void {
    // this.scrollContainer = this.scrollFrame.nativeElement as Element;
  }

  public OnPageChanged($event: PageEvent) {
    console.log('page changed');
    this.Model.CurrentPage = $event;
    this.pageChanged.next($event);
  }

  public OnAddButtonClick() {
    // this.paginator.lastPage();
    // this.scrollContainer.scroll({
    //   top: this.scrollContainer.scrollHeight,
    //   left: 0,
    //   behavior: 'smooth',
    // });
    let sub = this.dialog
      .open(EditorDialogComponent, { data: { content: 'This is a post' } })
      .afterClosed()
      .pipe(tap((value) => console.log('This after close ' + value)))
      .subscribe();
    this.subscriptions.add(sub);
  }
}
