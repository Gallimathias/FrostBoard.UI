import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainviewComponent } from "./mainview/mainview.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "mainview", component: MainviewComponent },
  { path: "", redirectTo: "/mainview", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
