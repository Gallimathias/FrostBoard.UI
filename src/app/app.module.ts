import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { MainviewComponent } from "./mainview/mainview.component";
import { GroupviewComponent } from "./groupview/groupview.component";
import { ForumviewComponent } from "./forumview/forumview.component";
import { ThreadviewComponent } from "./threadview/threadview.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    GroupviewComponent,
    ForumviewComponent,
    ThreadviewComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
