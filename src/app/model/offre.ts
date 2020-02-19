import {ServiceJava} from './service-java';
import {Metier} from './metier';
import {Artisan} from './artisan';

export class Offre {
    constructor(private _idOffre?: number, private _service?: ServiceJava, private _metier?: Metier, private _artisan?: Artisan) {
    }


    get idOffre(): number {
        return this._idOffre;
    }

    set idOffre(value: number) {
        this._idOffre = value;
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

    get artisan(): Artisan {
        return this._artisan;
    }

    set artisan(value: Artisan) {
        this._artisan = value;
    }
}
