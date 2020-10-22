import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/model/photo';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-myalbum',
  templateUrl: './myalbum.component.html',
  styleUrls: ['./myalbum.component.css']
})
export class MyalbumComponent  {

  private photos: Photo[];
  private user;
  private selectedPhoto: Photo;

  constructor (private photoService: PhotoService, private router: Router, private userService: UserService) {
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.user);
        this.photoService.getPhotosByUser(this.user).subscribe(
          photos => {console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList);
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }

  onSelect(photo:Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
    
  }

}
