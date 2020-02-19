import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Offre} from '../app/model/offre';
import {ActivatedRoute} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private url = 'http://localhost:8080/art/rest/offre'
  private headers: HttpHeaders;
  private options: object;

  //private idCompte: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    /*this.route.queryParams.subscribe(params => {
      this.idCompte = params['idComtpe'];
      //l'attribut idCompte contient l'id de la session connecté
    });*/
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
      service: {
        idService: offre.service
      },
      metier: {
        idMetier: offre.metier
      } ,
      artisan: {
        idCompte: offre.artisan
      }
    };
    return this.http.post(this.url + '/addOffre', o, this.options);
  }
}
