import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AtmServiceService }  from './atm-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor (public atmService: AtmServiceService, private router: Router) { }

  canActivate() {
    if (this.atmService.accountValid) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }

}
