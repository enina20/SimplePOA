import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdmiGuard implements CanActivate {


  constructor(private usarioService: UserService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.usarioService.usuario.role === 'Usuario') {
      this.router.navigateByUrl('/dashboard');
      return false;
    } else {
      return true;
    }
  }

}
