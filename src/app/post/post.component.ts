import { Component, Input, OnInit } from '@angular/core';
import { IPostViewModel } from './i-post.view-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() Model: IPostViewModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
