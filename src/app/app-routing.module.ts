import { TigerComponent } from './tiger/tiger.component';
import {LionComponent} from './lion/lion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path : 'tiger' , component: TigerComponent },
{ path : 'lion/:id' , component:LionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }