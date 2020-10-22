import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/model/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'photo-raw',
  templateUrl: './photoraw.component.html',
  styleUrls: ['./photoraw.component.css']
})
export class PhotorawComponent  {

  photoList: Photo[];
  photoListSorted: Photo[];
  photoListRanked: Photo[];

  constructor (private photoService: PhotoService) {
    this.photoService.getPhotos().subscribe(
      data => {
        this.photoList = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.photoListSorted = this.photoList.sort((a,b) => b.likes-a.likes);

        this.photoListRanked = [];

        for (let index in this.photoListSorted) {
          if (Number(index) < 3) {
            this.photoListRanked.push(this.photoListSorted[index]);
          } else {
            break;
          }
        }
      },
      error => console.log(error)
    );
  }

}
