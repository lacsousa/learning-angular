import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photosList : Object[] = [];

  constructor(http : HttpClient){
    // console.log(http);

    // Um observable é lazy. Ele só vai nos dados se alguém se inscrever nele pelo subscribe
    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        photos => this.photosList = photos,
        err => console.log(err)
      );
  }

}
