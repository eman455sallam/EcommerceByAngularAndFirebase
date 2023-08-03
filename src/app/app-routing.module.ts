import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddNewComponent } from './components/admin/add-new/add-new.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { authGuard } from './Gurds/auth.guard';
import { deAuthGuard } from './Gurds/de-auth.guard';
import { adminGuard } from './Gurds/admin.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:"home",component:HomeComponent,data:{ animation: 'HomePage'}},
  {path:"login",component:LoginComponent,canActivate:[deAuthGuard],data:{ animation: 'loginPage'}},
  {path:"signup",component:SignupComponent,canActivate:[deAuthGuard],data:{ animation: 'signupPage'}},
  {path:"cart",component:CartComponent,canActivate:[authGuard],data: { animation: 'cartPage' }},
  {path:"add",component:AddNewComponent ,canActivate:[authGuard ,adminGuard],data: { animation: 'addPage' }},
  {path:"dashboard",component:DashboardComponent ,canActivate:[authGuard ,adminGuard],data: { animation: 'dashboardPage' }},
  {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
