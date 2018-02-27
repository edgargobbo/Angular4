import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../login/auth.service';

@Injectable()
export class CursosGuard implements CanActivateChild {

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

}
