import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment';
import { Photo } from 'src/app/model/photo';
import { User } from 'src/app/model/user';
import { CommentserviceService } from 'src/app/services/commentservice.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'image-comments',
  templateUrl: './image-comment.component.html',
  styleUrls: ['./image-comment.component.css']
})
export class ImageCommentComponent implements OnInit {

  @Input('photo') photo: Photo;
  myLocalStorage = localStorage;
  user: User=new User();
  newComment = new Comment ();

  constructor(private userService: UserService, private commentService: CommentserviceService
    , private photoService: PhotoService) {
    console.log(this.photo);
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
      },
      error => console.log(error)
    )
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.photo);
    console.log(this.photo.commentList);
    this.newComment.photo=this.photo;
    this.newComment.userName=this.user.userName;
    this.newComment.photoId=this.photo.photoId;
    this.commentService.addComment(this.newComment).subscribe(
      photo => this.photoService.getPhotoById(this.photo.photoId).subscribe(
        photo => this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body),
        error => console.log(error)
      )
      // error => console.log(error)
    );
    // this.photo.commentList.push(this.newComment);


    this.newComment = new Comment();
  }



}
