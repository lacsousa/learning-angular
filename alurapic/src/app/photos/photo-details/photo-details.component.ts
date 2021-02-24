import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Photo } from "../photo/photo";
import { PhotoComment } from "../photo/photo-comment";
import { PhotoService } from "../photo/photo.service";

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit{

  photo$: Observable<Photo>;
  comments$ : Observable<PhotoComment[]>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
    ) {}


  ngOnInit(): void {

    const id = this.route.snapshot.params.photoId;
    //console.log(id);

    this.photo$ = this.photoService.findById(id);
    this.comments$ = this.photoService.getComments(id);

  }

}
