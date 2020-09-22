import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photosList : Photo[] = [];


  ngOnInit(): void{
    // Um observable é lazy. Ele só vai nos dados se alguém se inscrever nele pelo subscribe
    // Observables vem do RxJs usado quando vc trabalha com chamadas assíncronas
    this.photoService
    .listFromUser('flavio')
    .subscribe(
        photos => this.photosList = photos,
        err => console.log(err)
      );
  }

   // Apenas para injeção de dependências
   constructor(private photoService : PhotoService){}


}
