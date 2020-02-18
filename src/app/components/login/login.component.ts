import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  private error = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  public send() {
    this.loginService.login(this.user).subscribe(result => {
      sessionStorage.setItem('user', `${this.user.login}:${this.user.password}`);
      this.router.navigate(['/home']);
    }, error => {
      this.error = true;
    });
  }

}
