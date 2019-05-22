import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  // {
  //   path:'UserHome',
  //   loadChildren:'./home/home.module#HomeModule'
  // },
 {
   path:'UserHome',
   component:UserHomeComponent
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
