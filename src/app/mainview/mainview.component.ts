import { Component, OnInit } from '@angular/core';
import { Group } from '../model/group';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {

  public Groups: Group[] = [];
  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.forumService.getGroups().subscribe(g => this.Groups.push(g));
  }

}
