import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';

const routes: Routes = [
  {path:"a", component:AComponent, pathMatch:"full"},
  {path:"b", component:AComponent, pathMatch:"full"},
  {path:"", redirectTo: "a", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
