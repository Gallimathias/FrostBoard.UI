import { Observable } from 'rxjs';
import { IPage } from '../paging/i-page';
import { IPaginator } from '../paging/i-paginator';
import { Page } from '../paging/page';

export interface IDataService<TData, TKey> {
  Paginate(size: Observable<number>): Observable<IPaginator>;
  Get(page: Observable<IPage>): Observable<Page<TData>>;
  GetBy(keys: Observable<TKey>): Observable<TData>;
  AddOrUpdate(data: Observable<TData>): Observable<TData>;
  Delete(data: Observable<TKey>): Observable<TData>;
}
