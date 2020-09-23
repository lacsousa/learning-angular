import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable( { providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient) { }

  // No service apenas declaramos o método e depois ele será injetado
  listFromUser(nomeUsuario: string) {
    return this.http
      .get<Photo[]>(API + '/' + nomeUsuario + '/photos');

  }


}
