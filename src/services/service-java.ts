import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export class ServiceJava {
    private url = 'http://localhost:8080/art/rest/service';
    private headers: HttpHeaders;
    private options: object;

    constructor(private http: HttpClient) {
    }

    //creation de l'authentification
    private authentification() {
        this.headers = new  HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + sessionStorage.getItem('user') //btoa pour crypter le mot de passe
        });
        this.options = {headers: this.headers};
    }

    // trouver tous les services dans la base
    public findAll(): Observable <any> {
        this.authentification();
        return  this.http.get(this.url, this.options);
    }


}
