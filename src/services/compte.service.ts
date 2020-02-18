import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Compte} from '../app/model/compte';
import {Artisan} from '../app/model/artisan';
import {Client} from '../app/model/client';

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
    return this.http.get( this.url, this.options);
  }

  public delete(id: number): Observable<any> {
    // this.authentication();
    return this.http.delete(`${this.url}/${id}`, this.options);
  }

  public insert(compte: Compte): Observable<any> {
    const o: object = {
      id: compte.idCompte,
      login: compte.login,
      mdp: compte.mdp,
      email: compte.email,
      adresse: compte.adresse,
      enable: compte.enable,
      role: compte.roles
    };
    return this.http.post(this.url, o, this.options);
  }

  public insertArtisan(artisan: Artisan): Observable<any> {
    // this.authentication();
    const o: object = {
      id: artisan.idCompte,
      login: artisan.login,
      mdp: artisan.mdp,
      email: artisan.email,
      adresse: artisan.adresse,
      enable: artisan.enable,
      role: artisan.roles
    };
    return this.http.post(this.url + '/artisan', o, this.options);
  }

  public insertClient(client: Client): Observable<any> {
    // this.authentication();
    const o: object = {
      id: client.idCompte,
      login: client.login,
      mdp: client.mdp,
      email: client.email,
      adresse: client.adresse,
      enable: client.enable,
      role: client.roles
    };
    return this.http.post(this.url + '/client', o, this.options);
  }

}
