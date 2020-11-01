import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAuthComponent } from './page-auth/page-auth.component'; //new
import { PageRegComponent } from './page-reg/page-reg.component'; //new

const routes: Routes = [
  { path: 'page-auth', component: PageAuthComponent }, //new
  { path: 'page-reg', component: PageRegComponent }, //new
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
