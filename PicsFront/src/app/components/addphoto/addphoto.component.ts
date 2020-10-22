import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/model/photo';
import { User } from 'src/app/model/user';
import { AddphotoService } from 'src/app/services/addphoto.service';
import { UploadphotoService } from 'src/app/services/uploadphoto.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addphoto',
  templateUrl: './addphoto.component.html',
  styleUrls: ['./addphoto.component.css']
})
export class AddphotoComponent  {

  newPhoto: Photo = new Photo();
  photoAdded: boolean = false;
  user: User;

  constructor (private uploadPhotoService:UploadphotoService, private addPhotoService: AddphotoService, private userService:UserService) {}

  onSubmit() {
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.user);
        this.newPhoto.user = this.user;
console.log('----------------------------')
        console.log(this.newPhoto)
        this.addPhotoService.sendPhoto(this.newPhoto)
        .subscribe(
          data => {
            this.photoAdded = true;
            this.newPhoto = new Photo();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    )
  }

}
