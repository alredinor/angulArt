import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Metier} from '../app/model/metier';

@Injectable({
  providedIn: 'root'
})
export class MetierService {

  private url: string = 'http://localhost:8080/art/rest/metier';
  private headers: HttpHeaders;
  private options: Object;

  constructor(private http: HttpClient) {

  }

  private authentication() {
    this.headers = new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Basic '+ btoa( 'postgres:root')
    });
    this.options = {
      headers: this.headers
    }
  }

  public findAll(): Observable<any> {
    this.authentication();
    return this.http.get( this.url, this.options);
  }

  public delete(titreMetier: string): Observable<any> {
    this.authentication();
    return this.http.delete(`${this.url}/${titreMetier}`, this.options);
  }

  public insert(metier: Metier): Observable<any> {
    this.authentication();
    const o: object = {
      'nom': metier.titreMetier
    };
    return this.http.post(this.url, o, this.options);
  }

}