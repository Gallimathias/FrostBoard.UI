import { Observable } from 'rxjs';
import { IPage } from '../paging/i-page';
import { IPaginator } from '../paging/i-paginator';
import { Page } from '../paging/page';
import { IDataService } from './i-data-service';

export abstract class DataService<TData, TKey>
  implements IDataService<TData, TKey>
{
  constructor(protected internalService: IDataService<TData, TKey>) {
   
  }
  
  public Paginate(size: Observable<number>): Observable<IPaginator> {
    return this.internalService.Paginate(size);
  }
  public Get(page: Observable<IPage>): Observable<Page<TData>> {
    return this.internalService.Get(page);
  }
  public GetBy(keys: Observable<TKey>): Observable<TData> {
    return this.internalService.GetBy(keys);
  }
  public AddOrUpdate(data: Observable<TData>): Observable<TData> {
    return this.internalService.AddOrUpdate(data);
  }
  public Delete(keys: Observable<TKey>): Observable<TData> {
    return this.internalService.Delete(keys);
  }
}
