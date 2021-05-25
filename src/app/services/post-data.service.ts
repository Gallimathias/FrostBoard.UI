import { Injectable } from '@angular/core';
import { IPostViewModel } from '../post/i-post.view-model';
import { DataService } from './data.service';
import { MockPostDataService } from './mock-post-data.service';

@Injectable({
  providedIn: 'root',
})
export class PostDataService extends DataService<IPostViewModel, number> {
  constructor(service: MockPostDataService) {
    super(service);
  }
}
