import { Injectable } from '@angular/core';
import {Demande} from '../app/model/demande';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  _demandes: Demande[] = [new Demande()];
  demande: Demande = new Demande();
  private url = 'http://localhost:8080/art/rest/demande'
  private headers: HttpHeaders;
  private options: object;

  // private demandes: Demande[] = [new Demande('500', 'test',
  //     200, 100, '','','','')]

  get demandes(): Demande[] {
    return this._demandes;
  }
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
  public  findById(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id, this.options);
  }

  public delete(id: number): Observable<any>{

    return this.http.delete(this.url + '/' + id, this.options) ;
  }
  public insert(demande: Demande): Observable<any> {
    this.authentification()
    const  o: object = {
      client: {idCompte: demande.client},
      offre: {idOffre: demande.offre},
      date: demande.date,
      statut: demande.statut,
      message: demande.message

    };
    return this.http.post(this.url + '/addDemande', o, this.options);
  }

  public edit(demande: Demande, id: number): Observable<any> {
    this.findById(demande.idDemande);
    const  o: object = {
      client: {idCompte: demande.client},
      offre: {idOffre: demande.offre},
      date: demande.date,
      statut: demande.statut,
      message: demande.message

    };
    console.log(demande.idDemande);
    return this.http.put(this.url + '/' +  id, o, this.options);

  }

}

