import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AtmServiceService }  from './atm-service.service';

@Injectable()
export class HttpinterceptorService {

  constructor(public atmService: AtmServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const request = req.clone({
      headers: req.headers.set('bbank-ApiKey', 'heregoesastrongpasswordfortheApiKey').set('bbank-secure', this.atmService.getToken())
    });

    return next.handle(request);

  }

}
