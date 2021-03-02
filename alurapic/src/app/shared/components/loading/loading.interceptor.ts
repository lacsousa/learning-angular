import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { LoadingService } from './loading.service';
import { tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor{

    constructor(
      private loadingService: LoadingService
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next
        .handle(req)
        .pipe(tap(event => {
          if(event instanceof HttpResponse) {
            this.loadingService.stop();
          } else {
            this.loadingService.start();
          }
        }));
  }

}
