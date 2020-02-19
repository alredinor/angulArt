import { Injectable } from '@angular/core';
import {Compte} from '../app/model/compte';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/art/rest/login';

  constructor(private  http: HttpClient, private loginService: LoginService) { }

  public login(compte: Compte): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders(
      {
        'Content-type': 'application/json',
        Authorization: 'Basic ' + btoa(`${compte.login}:${compte.mdp}`)
      });
    const options: object = {
      headers: headers
    };
    return this.http.get(this.url, options);
  }
}
