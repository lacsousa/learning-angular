import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { Photo } from './photo';
import { PhotoComment } from './photo-comment';


const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
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
      .get<Photo[]>(API + '/' + nomeUsuario + '/photos', { params: parametros });

  }

  upload(description: string, allowComments: boolean, file: File) {

    // Quando tem um arquivo envolvido na história usa-se formdata ao invés de Json
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(API + '/photos/upload', formData);

  }

  findById(id: number) {
    return this.http.get<Photo>(API + '/photos/' + id);

  }

  getComments(photoId: number) {
    return this.http.get<PhotoComment[]>(
      API + '/photos/' + photoId + '/comments'
    );
  }

  addComment(photoId: number, commentText: string) {

    return this.http.post(
      API + '/photos/' + photoId + '/comments', { commentText }
    );
  }

  removePhoto(photoId: number) {

    return this.http.delete(API + '/photos/' + photoId);

  }

  like(photoId: number) {

    return this.http.post(
      // Se quiser resposta adiciona esse 3o. parâmetro
      API + '/photos/' + photoId + '/like', {}, { observe: 'response' }
    )
      .pipe(map(res => true))
      .pipe(catchError(err => {
        return err.status == '304' ? of(false) : throwError(err);
      }));
  }
}
