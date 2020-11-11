import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root'})
export class UserService {

  private userBehaviorSubject =  new BehaviorSubject<User>(null);
  // Qdo vc usa o Subject vc emit o valor via next()
  // no BehaviorSubject vc já inicia com um valor

  constructor(private tokenService: TokenService) {

    this.tokenService.hasToken() &&
      this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();

  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User; //cast
    this.userBehaviorSubject.next(user);
}

  getUser() {
    return this.userBehaviorSubject.asObservable();
  }



}
