import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { HttpModule } from '@angular/http';
import { PhotoService } from './services/photo.service';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterService } from './services/register.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MyalbumComponent } from './components/myalbum/myalbum.component';
import { LoginService } from './services/login.service';
import { User } from './model/user';
import { UserService } from './services/user.service';
import { AddphotoComponent } from './components/addphoto/addphoto.component';
import { ImagedetailComponent } from './components/imagedetail/imagedetail.component';
import { ImageCommentComponent } from './components/image-comment/image-comment.component';
import { PhotorawComponent } from './components/photoraw/photoraw.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidepanelComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    MyalbumComponent,
    AddphotoComponent,
    ImagedetailComponent,
    ImageCommentComponent,
    PhotorawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ PhotoService,RegisterService,LoginService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
