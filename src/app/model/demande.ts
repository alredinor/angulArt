import {Compte} from './compte';
import {Metier} from './metier';
import {StatutDemande} from '../statut-demande.enum';

export class Demande {
    constructor(private idDemande: number, private message: string, private artisan: Compte, private client: Compte,
                private service: Service, private metier: Metier, private statut: StatutDemande, private date: Date)
    {
    }
}
