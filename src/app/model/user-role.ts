import {Compte} from './compte';
import {Role} from './role.enum';

export class UserRole {
  constructor(private _id: number,
              private _idCompte: Compte,
              private _role: Role) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get idCompte(): Compte {
    return this._idCompte;
  }

  set idCompte(value: Compte) {
    this._idCompte = value;
  }

  get role(): Role {
    return this._role;
  }

  set role(value: Role) {
    this._role = value;
  }
}
