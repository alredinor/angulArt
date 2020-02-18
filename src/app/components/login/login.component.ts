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

  private error = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  public send() {
    this.loginService.login(this.compte).subscribe(result => {
      sessionStorage.setItem('user', `${this.compte.login}:${this.compte.mdp}`);
      this.router.navigate(['/home']);
    }, error => {
      this.error = true;
    });
  }

}
