import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './authgaurd/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path:'UserHome',
  //   loadChildren:'./home/home.module#HomeModule'
  // },
 {
   path:'UserHome',
   component:UserHomeComponent
 },
 { path: '', component:UserHomeComponent},
 { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
 { path:'login',component:LoginComponent},
 { path:'UserSignup',component:SignupComponent},
 { path: '**', redirectTo: '' } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
