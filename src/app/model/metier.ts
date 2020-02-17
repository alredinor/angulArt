export class Metier {

    constructor(private _idMetier?: number, private _titreMetier?: string) {
    }

    get idMetier(): number {
        return this._idMetier;
    }

    set idMetier(value: number) {
        this._idMetier = value;
    }

    get titreMetier(): string {
        return this._titreMetier;
    }

    set titreMetier(value: string) {
        this._titreMetier = value;
    }
}
