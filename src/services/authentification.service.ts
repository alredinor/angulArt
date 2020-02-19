import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = sessionStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/error', 'login']);
    }
    return false;
  }

}
