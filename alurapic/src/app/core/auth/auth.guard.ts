import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      // console.log('Ativou a guarda de rota');
      if(!this.userService.isLogged()){
        this.router.navigate(
          [''],
          {
            queryParams: {
              fromUrl: state.url
              // Query params para guardar a rota onde eu queria ir antes
              // da aplicação me jogar para o Login
            }
          }
        );
        return false;
      }
      return true;
  }
}
