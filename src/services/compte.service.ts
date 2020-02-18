import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Metier} from '../app/model/metier';
import {Compte} from '../app/model/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private url: string = 'http://localhost:8080/art/rest/compte';
  private headers: HttpHeaders;
  private options: object;

  constructor(private http: HttpClient) {

  }

  /* private authentication() {
    this.headers = new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Basic '+ btoa( 'postgres:root')
    });
    this.options = {
      headers: this.headers
    }
  }*/

  public findAll(): Observable<any> {
    //this.authentication();
    return this.http.get( this.url, this.options);
  }

  public delete(id: number): Observable<any> {
    // this.authentication();
    return this.http.delete(`${this.url}/${id}`, this.options);
  }

  public insert(compte: Compte): Observable<any> {
    // this.authentication();
    const o: object = {
      id: compte.idCompte,
      login: compte.login,
      mdp: compte.mdp,
      email: compte.email,
      adresse: compte.adresse,
      enable: compte.enable,
      role: compte.roles
    };
    return this.http.post(this.url + '/addCompte', o, this.options);
  }

}
