//Angular Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//App Core
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material Design
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

//Custom
import { DrawerRailModule } from 'angular-material-rail-drawer';

//Declarations
import { BoardComponent } from './board/board.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ThreadComponent } from './thread/thread.component';
import { CardListComponent } from './card-list/card-list.component';
import { PostComponent } from './post/post.component';
import { BoardCardComponent } from './board-card/board-card.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardCardComponent,
    CardListComponent,
    TopBarComponent,
    ThreadComponent,
    PostComponent,
    EditorComponent,
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
    MatPaginatorModule,
    MatButtonModule,

    //Custom
    DrawerRailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
