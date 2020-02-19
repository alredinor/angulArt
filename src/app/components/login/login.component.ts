import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/login.service';
import {Compte} from '../../model/compte';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private compte: Compte = new Compte();

  private erreur = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  public send() {
    this.loginService.login(this.compte).subscribe(result => {
      sessionStorage.setItem('compte', btoa(`${this.compte.login}:${this.compte.mdp}`));
      // sessionStorage.setItem('token', this.user.login);
      sessionStorage.setItem('token', this.compte.login);
      this.router.navigate(['/home']);
    }, error => {
      this.erreur = true;
    });
  }

  public annuler() {
    this.router.navigate(['login']);
  }

  // login() {
  //   console.log('Tentative de connexion');
  // }

}
