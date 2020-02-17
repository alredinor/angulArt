import { Injectable } from '@angular/core';
import {Demande} from '../app/model/demande';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private url = 'http://localhost:8080/art/rest/demande'
  private headers: HttpHeaders;
  private options: object;

  // private demandes: Demande[] = [new Demande('500', 'test',
  //     200, 100, '','','','')]


  constructor(private http: HttpClient) {
  }
// private authentification(){
//     this.headers = new HttpHeaders({ 'Content-Type': 'application/json',
//       'Authorization': 'Basic ' + sessionStorage.getItem('user')});
//     this.options = {headers: this.headers};
// }
public findAll(): Observable<any> {
    // this.authentification()
  return this.http.get(this.url, this.options);
}

public delete(id: number): Observable<any>{

  return this.http.delete(this.url + '/' + id, this.options) ;
}
}

