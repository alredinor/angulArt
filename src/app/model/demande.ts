import {Compte} from './compte';
import {Metier} from './metier';
import {StatutDemande} from '../statut-demande.enum';
import {ServiceJava} from './service-java';

export class Demande {
    constructor(private _idDemande?: number, private _message?: string, private _artisan?: number, private _client?: number,
                private _service?: ServiceJava, private _metier?: Metier, private _statut?: StatutDemande, private _date?: Date)
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

    get artisan(): number {
        return this._artisan;
    }

    set artisan(value: number) {
        this._artisan = value;
    }

    get client(): number {
        return this._client;
    }

    set client(value: number) {
        this._client = value;
    }


    get service(): ServiceJava {
        return this._service;
    }

    set service(value: ServiceJava) {
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
