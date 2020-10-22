import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/model/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[];
  selectedPhoto: Photo;

  constructor(private photoService: PhotoService,private router:Router) {
 /*    this.photoservice.getPhotos().subscribe(

      data => console.log(data),
      error=> console.log(error)
    ) */


    this.photoService.getPhotos().subscribe(
      data => console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body)),
      error => console.log(error)
    );
   }

  ngOnInit() {
  }
  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['image-detail', this.selectedPhoto.photoId]);
  }
}
