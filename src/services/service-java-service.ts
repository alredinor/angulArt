import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServiceJava} from '../app/model/service-java';
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceJavaService {
    private url = 'http://localhost:8080/art/rest/service';
    private headers: HttpHeaders;
    private options: object;

    constructor(private http: HttpClient) {
    }

    // creation de l'authentification
    private authentification() {
        this.headers = new  HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + sessionStorage.getItem('user') // btoa pour crypter le mot de passe
        });
        this.options = {headers: this.headers};
    }

    // trouver tous les services dans la base
    public findAll(): Observable <any> {
        this.authentification();
        return  this.http.get(this.url, this.options);
    }

    public delete(nomService: string): Observable<any> {
        this.authentification()
        return this.http.delete(this.url + '/' + nomService, this.options);
    }

    public insert(service: ServiceJava ): Observable<any> {
        this.authentification();
        const o = {
            nomService: service.nomService
        };
        return this.http.post(this.url, o, this.options);
    }
}
