import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Forum } from "../model/forum";
import { Observable, from } from "rxjs";
import { Group } from "../model/group";

@Injectable({
  providedIn: "root"
})
export class ForumService {
  constructor(private client: HttpClient) {}

  // public getForums(): Observable<Forum>{
  //   return Observable.create()
  // }

  public getGroups(): Observable<Group> {
    let groups: Group[] = [
      { Name: "Test1", Description: "Bla", Order: 0, Forums: [{Name: "Welcome", Order: 0}] },
      { Name: "Test2", Order: 1, Forums: [{Name: "Spiel1", Description: "Hier wird gespielt", Order: 0}, {Name: "SimOff", Description: "Alles andere", Order: 1}] }
    ];
    return from(groups);
  }
}
