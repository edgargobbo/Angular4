import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AuthService } from '../login/auth.service';

@Injectable()
export class AlunosGuard implements CanActivateChild {

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (state.url.includes('editar')) {
      alert('Usuário sem acesso');
      return Observable.of(false);
    }

    return true;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

}
