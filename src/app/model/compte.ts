import {Adresse} from './adresse';
import {UserRole} from './user-role';

export class Compte {
constructor(private _typeCompte?: string,
            private _login?: string,
            private _mdp?: string,
            private _idCompte?: number,
            private  _email?: string,
            private _adresse?: Adresse,
            private _enable?: boolean,
            private _roles?: UserRole,
            ) {
}

  get typeCompte(): string {
    return this._typeCompte;
  }

  set typeCompte(value: string) {
    this._typeCompte = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get mdp(): string {
    return this._mdp;
  }

  set mdp(value: string) {
    this._mdp = value;
  }

  get idCompte(): number {
    return this._idCompte;
  }

  set idCompte(value: number) {
    this._idCompte = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
  }

  get enable(): boolean {
    return this._enable;
  }

  set enable(value: boolean) {
    this._enable = value;
  }

  get roles(): UserRole {
    return this._roles;
  }

  set roles(value: UserRole) {
    this._roles = value;
  }
}
