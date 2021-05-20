import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BoardCardComponent } from './board-card/board-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DrawerRailModule } from 'angular-material-rail-drawer';
import { ThreadComponent } from './thread/thread.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardCardComponent,
    CardListComponent,
    TopBarComponent,
    ThreadComponent,
    PostComponent,
  ],
  imports: [
    //Angular
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Material
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,

    //Custom
    DrawerRailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
