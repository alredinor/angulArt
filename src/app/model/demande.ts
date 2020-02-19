import {Compte} from './compte';
import {Metier} from './metier';
import {StatutDemande} from '../statut-demande.enum';
import {ServiceJava} from './service-java';
import {Offre} from './offre';


export class Demande {
    constructor(private _idDemande?: number, private _message?: string, private _client?: Compte,
                private _statut?: StatutDemande, private _date?: Date, private _offre?: Offre)
    {
    }

    get idDemande(): number {
        return this._idDemande;
    }

    set idDemande(value: number) {
        this._idDemande = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }



    get client(): Compte {
        return this._client;
    }

    set client(value: Compte) {
        this._client = value;
    }


    get statut(): StatutDemande {
        return this._statut;
    }

    set statut(value: StatutDemande) {
        this._statut = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }


    get offre(): Offre {
        return this._offre;
    }

    set offre(value: Offre) {
        this._offre = value;
    }
}
