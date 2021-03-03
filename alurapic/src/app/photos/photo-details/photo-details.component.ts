import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/core/user/user.service";
import { AlertService } from "src/app/shared/components/alert/alert.service";
import { Photo } from "../photo/photo";
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
    private alertService: AlertService,
    private userService: UserService
    ) {}


  ngOnInit(): void {

    this.idPhotoDetails = this.route.snapshot.params.photoId;
    //console.log(id);
    this.photo$ = this.photoService.findById(this.idPhotoDetails);
    this.photo$.subscribe( () => {}, err => {
      console.log(err);
      this.router.navigate(['not-found']);
    });

  }

  remove(){
    this.photoService
      .removePhoto(this.idPhotoDetails)
      .subscribe(
        () => {
          this.alertService.success("Photo removed", true);
          this.router.navigate(['/user', this.userService.getUserName()]);
        },
        err => {
          console.log(err);
          this.alertService.warning("Could not delete this photo!", true);
        });
  }

  like(photo: Photo){
    this.photoService
      .like(photo.id)
      .subscribe(liked => {
        if (liked) {
          this.photo$ = this.photoService.findById(photo.id);

        }
      })

  }
}
