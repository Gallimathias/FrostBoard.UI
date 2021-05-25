import { from, Observable } from 'rxjs';
import { concatAll, map } from 'rxjs/operators';
import { IDataService } from '../services/i-data-service';
import { Page } from './page';
import { Paginator } from './paginator';

export class PageView {
  public static Create<TData, TKey>(
    dataService: IDataService<TData, TKey>,
    size: number,
    pages: Observable<number>
  ): Observable<Page<TData>> {
    return dataService.Paginate(from([size])).pipe(
      map((pagination) => Paginator.from(pagination)),
      map((paginator) =>
        pages.pipe(
          map((index) =>
            dataService.Get(from([{ Size: paginator.Size, Index: index }]))
          ),
          concatAll()
        )
      ),
      concatAll()
    );
  }
}
