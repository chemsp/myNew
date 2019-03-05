import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test2Component } from './test2/test2.component';
import { TestComponent } from './test/test.component';
import { AuthGaurdService } from './auth-gaurd.service';

const routes: Routes = [
  {path:'test2', component:Test2Component,canActivate:[AuthGaurdService]},
  {path:'test', component:TestComponent},
  {path:'test/:id/:name', component:TestComponent},
  {path: "", redirectTo:'test', pathMatch:"full"},
  {path: "**", redirectTo:'test'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
