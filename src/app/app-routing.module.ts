import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { ThreadComponent } from './thread/thread.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/board' }, //Main page
  // {path: '**', redirectTo: ''}, //404 File not Found
  { path: 'board', component: BoardComponent }, //Board with no id
  { path: 'board/:id', component: BoardComponent }, //Board with id
  { path: 'thread', component: ThreadComponent }, //Thread with no id
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
