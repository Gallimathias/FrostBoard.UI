import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/board' }, //Main page
  // {path: '**', redirectTo: ''}, //404 File not Found
  { path: 'board', component: BoardComponent }, //Board with no id
  { path: 'board/:id', component: BoardComponent }, //Board with id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
