import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Demande} from '../app/model/demande';
import {Offre} from '../app/model/offre';


@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private url = 'http://localhost:8080/art/rest/offre'
  private headers: HttpHeaders;
  private options: object;
  constructor(private http: HttpClient) {
  }

  private authentification(){
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json',
      'Authorization': 'Basic ' + sessionStorage.getItem('user')});
    this.options = {headers: this.headers};
  }
  public findAll(): Observable<any> {
    this.authentification()
    return this.http.get(this.url, this.options);
  }

  public delete(id: number): Observable<any>{

    return this.http.delete(this.url + '/' + id, this.options) ;
  }
  public insert(offre: Offre): Observable<any> {
    this.authentification()
    const  o: object = {
      service: offre.service,
      metier: offre.metier,
      artisan: offre.artisan
    };
    return this.http.post(this.url + '/addOffre', o, this.options);
  }
}
