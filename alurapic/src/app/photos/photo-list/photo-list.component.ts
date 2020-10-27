import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photosListComponent : Photo[] = [];
  filter: string = '';

  ngOnInit(): void{

    const nameUser = this.activatedRoute.snapshot.params.userName;
    // Um observable é lazy. Ele só vai nos dados se alguém se inscrever nele pelo subscribe
    // Observables vem do RxJs usado quando vc trabalha com chamadas assíncronas
    this.photoService
    .listFromUser(nameUser)
    .subscribe(
        photos => this.photosListComponent = photos,
        err => console.log(err)
      );
  }

   // Apenas para injeção de dependências
   constructor(
     private photoService : PhotoService,
     private activatedRoute : ActivatedRoute
     ){}


}
