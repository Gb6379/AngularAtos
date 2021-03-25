
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { Component2Component } from './component2/component2.component';

const routes: Routes = [
  {path: 'albumComponent', component: ComponentComponent},
  {path: 'photoComponent', component: Component2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
