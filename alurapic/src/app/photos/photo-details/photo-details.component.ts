import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AlertService } from "src/app/shared/components/alert/alert.service";
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
    private router: Router,
    private alertService: AlertService
    ) {}


  ngOnInit(): void {

    this.idPhotoDetails = this.route.snapshot.params.photoId;
    //console.log(id);

    this.photo$ = this.photoService.findById(this.idPhotoDetails);

  }

  remove(){
    this.photoService
      .removePhoto(this.idPhotoDetails)
      .subscribe(
        () => {
          this.alertService.success("Photo removed");
          this.router.navigate(['']);
        },
        err => {
          console.log(err);
          this.alertService.warning("Could not delete this photo!");
        });
  }
}
