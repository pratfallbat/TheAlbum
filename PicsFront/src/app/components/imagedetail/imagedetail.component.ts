import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Photo } from 'src/app/model/photo';
import { User } from 'src/app/model/user';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-imagedetail',
  templateUrl: './imagedetail.component.html',
  styleUrls: ['./imagedetail.component.css']
})
export class ImagedetailComponent implements OnInit {

  photo: Photo=new Photo();
  like: string;
  user: User;
  photoId: number;

  constructor ( private photoService: PhotoService, private userService: UserService, private route: ActivatedRoute){
     this.route.params.forEach((params: Params) => {
     this.photoId = Number.parseInt(params['id']);
    });

    
    this.photoService.getPhotoById(this.photoId).subscribe(
      photo => {
        this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body);
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
          user => {
            this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            if (this.user.likedPhotoList.filter(photo => photo.photoId == this.photo.photoId)[0]) {
              this.like="Unlike";
            } else {
              this.like="Like";
            }
          },
          error => console.log(error)
        )
      },
      error => console.log(error)
    );
  }

  goBack() {
    window.history.back();
  }

  ngOnInit() {

  }

  likeDisplay() {
    if (this.like =="Like") {
      this.like="Unlike";
      this.user.likedPhotoList.push(this.photo);
      this.photo.likes+=1;
      this.userService.updateUser(this.user).subscribe();
      this.photoService.updatePhoto(this.photo).subscribe();
    } else {
      this.like="Like";
      // var index = this.user.likedPhotoList.indexOf(this.photo, 0);
      for (let i=0; i<this.user.likedPhotoList.length; i++) {
        if (this.user.likedPhotoList[i].photoId == this.photo.photoId) {
            this.user.likedPhotoList.splice(i, 1);
        }
      }
      // console.log(index);
      // if (index > -1) {
      //   this.user.likedPhotoList.splice(index, 1);
      // }
      this.photo.likes-=1;
      this.userService.updateUser(this.user).subscribe();
      this.photoService.updatePhoto(this.photo).subscribe();
    }
  }

}
