import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddNewComponent } from './components/admin/add-new/add-new.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { authGuard } from './Gurds/auth.guard';
import { deAuthGuard } from './Gurds/de-auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent,canActivate:[deAuthGuard]},
  {path:"signup",component:SignupComponent,canActivate:[deAuthGuard]},
  {path:"goods",component:GoodsComponent ,canActivate:[authGuard]},
  {path:"cart",component:CartComponent,canActivate:[authGuard]},
  {path:"add",component:AddNewComponent ,canActivate:[authGuard]},
  {path:"dashboard",component:DashboardComponent ,canActivate:[authGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
