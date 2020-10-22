import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddphotoComponent } from './components/addphoto/addphoto.component';
import { HomeComponent } from './components/home/home.component';
import { ImagedetailComponent } from './components/imagedetail/imagedetail.component';
import { LoginComponent } from './components/login/login.component';
import { MyalbumComponent } from './components/myalbum/myalbum.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-album',
    component: MyalbumComponent
  },
  {
    path: 'add-photo',
    component: AddphotoComponent
  },
  {
    path: 'image-detail/:id',
    component: ImagedetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
