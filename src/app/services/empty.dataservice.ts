import { EMPTY, NEVER, Observable } from "rxjs";
import { IPage } from "../paging/i-page";
import { IPaginator } from "../paging/i-paginator";
import { Page } from "../paging/page";
import { IDataService } from "./i-data-service";

export class EmptyDataService<TData,TKey> implements IDataService<TData, TKey>
{
    Paginate(size: Observable<number>): Observable<IPaginator> {
        return NEVER;
    }
    Get(page: Observable<IPage>): Observable<Page<TData>> {
        return NEVER;
    }
    GetBy(keys: Observable<TKey>): Observable<TData> {
        return NEVER;
    }
    AddOrUpdate(data: Observable<TData>): Observable<TData> {
        return NEVER;
    }
    Delete(data: Observable<TKey>): Observable<TData> {
        return NEVER;
    }

}