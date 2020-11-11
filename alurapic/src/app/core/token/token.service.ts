import { Injectable } from "@angular/core";

const KEY = 'authToken';
@Injectable( { providedIn: 'root'})
export class TokenService{

  hasToken() {
    return !!this.getToken();
    // se existir retorna uma string, senão retorna null
    // se existir a primeira ! muda para falso e a segunda para verdadeiro
    // se for nulo a primeira ! muda para verdadeiro e a segunda para falso
    // truque antigo em JS
  }

  setToken(token){
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
