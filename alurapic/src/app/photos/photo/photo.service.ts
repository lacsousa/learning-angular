import { HttpClient, HttpParams } from '@angular/common/http'
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

  listFromUserPaginated(nomeUsuario: string, page: number) {
    const parametros = new HttpParams()
          .append('page', page.toString());

    return this.http
      .get<Photo[]>(API + '/' + nomeUsuario + '/photos',  { params : parametros } );

  }

  upload(description: string, allowComments: boolean, file:File) {

    // Quando tem um arquivo envolvido na história usa-se formdata ao invés de Json
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(API + '/photos/upload', formData);

  }
}
