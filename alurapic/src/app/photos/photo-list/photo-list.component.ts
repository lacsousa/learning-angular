import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photosListComponent: Photo[] = [];
  filter: string = '';

  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  // Apenas para injeção de dependências
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) { }



  ngOnInit(): void {

    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photosListComponent = this.activatedRoute.snapshot.data.photosListResolve; //nome da propriedade no routing

    // O Debounce vai fazer com que a busca espere um tempo pré-determinado
    // Para que não sejam feitas várias requisições a cada digitação no campo filter

    // Comentar no momento da componentização do filtro
    // this.debounce
    // .pipe(debounceTime(300))
    // .subscribe(filter => this.filter = filter);

    // const nameUser = this.activatedRoute.snapshot.params.userName;
    // // Um observable é lazy. Ele só vai nos dados se alguém se inscrever nele pelo subscribe
    // // Observables vem do RxJs usado quando vc trabalha com chamadas assíncronas
    // this.photoService
    // .listFromUser(nameUser)
    // .subscribe(
    //     photos => this.photosListComponent = photos,
    //     err => console.log(err)
    //   );
  }

  // Comentar no momento da componentização do filtro
  // ngOnDestroy() {
  //   // porque vc tá trabalhando com um Observer que não tem um Complete
  //   // senão usar o destroy vc vai ficar ocupando memória com esse componente
  //   // evitando o memory leak
  //   this.debounce.unsubscribe();
  // }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photosListComponent => {

        // O angular só detecta lá no photosComponent numa Inbound property
        // que houve mudança
        // se houver novos valores nela
        this.filter = '';
        this.photosListComponent = this.photosListComponent.concat(photosListComponent);
        if (!photosListComponent.length) this.hasMore = false;
      });
  }



}
