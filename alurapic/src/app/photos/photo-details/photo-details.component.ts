import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Photo } from "../photo/photo";
import { PhotoComment } from "../photo/photo-comment";
import { PhotoService } from "../photo/photo.service";

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit{

  photo$: Observable<Photo>;
  idPhotoDetails: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
    ) {}


  ngOnInit(): void {

    this.idPhotoDetails = this.route.snapshot.params.photoId;
    //console.log(id);

    this.photo$ = this.photoService.findById(this.idPhotoDetails);

  }

  remove(){
    this.photoService
      .removePhoto(this.idPhotoDetails)
      .subscribe(() => this.router.navigate(['']));
  }
}
