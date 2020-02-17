import {Compte} from './compte';
import {Metier} from './metier';
import {StatutDemande} from '../statut-demande.enum';
import {Service} from './service';

export class Demande {
    constructor(private _idDemande: number, private _message: string, private _artisan: Compte, private _client: Compte,
                private _service: Service, private _metier: Metier, private _statut: StatutDemande, private _date: Date)
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

    get artisan(): Compte {
        return this._artisan;
    }

    set artisan(value: Compte) {
        this._artisan = value;
    }

    get client(): Compte {
        return this._client;
    }

    set client(value: Compte) {
        this._client = value;
    }

    get service(): Service {
        return this._service;
    }

    set service(value: Service) {
        this._service = value;
    }

    get metier(): Metier {
        return this._metier;
    }

    set metier(value: Metier) {
        this._metier = value;
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
}
