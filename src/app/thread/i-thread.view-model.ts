import { PageEvent } from "@angular/material/paginator";
import { Observable } from "rxjs";
import { Paginator } from "../paging/paginator";
import { IPostViewModel } from "../post/i-post.view-model";

export interface IThreadViewModel{
    CurrentPage?: PageEvent;
    Paginator: Paginator;
    Posts: IPostViewModel[];
    PageChanged: Observable<PageEvent>;
}