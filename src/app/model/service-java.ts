import {Metier} from './metier';

export class ServiceJava {
    constructor(
        private _idService?: number,
        private _nomService?: string,
        private _metier?: Metier
    ) {
    }


    get idService(): number {
        return this._idService;
    }

    set idService(value: number) {
        this._idService = value;
    }

    get nomService(): string {
        return this._nomService;
    }

    set nomService(value: string) {
        this._nomService = value;
    }

    get metier(): Metier {
        return this._metier;
    }

    set metier(value: Metier) {
        this._metier = value;
    }
}
