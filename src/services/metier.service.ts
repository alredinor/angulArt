import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Metier} from '../app/model/metier';

@Injectable({
  providedIn: 'root'
})
export class MetierService {

  _metiers: Metier[] = [new Metier()];
  private url: string = 'http://localhost:8080/art/rest/metier';
  private headers: HttpHeaders;
  private options: object;

  get metiers(): Metier[] {
    return this._metiers;
  }
  constructor(private http: HttpClient) {

  }

  private authentication() {
    this.headers = new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Basic '+ sessionStorage.getItem('user')
    });
    this.options = {
      headers: this.headers
    }
  }

  public findAll(): Observable<any> {
    this.authentication();
    return this.http.get( this.url, this.options);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.options);
  }

  public insert(metier: Metier): Observable<any> {
    this.authentication();
    const o: object = {
      idMetier: metier.idMetier,
      titreMetier: metier.titreMetier
    };
    return this.http.post(this.url + '/addMetier', o, this.options);
  }

}
