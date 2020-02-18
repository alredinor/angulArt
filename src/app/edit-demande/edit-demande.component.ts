import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DemandeService} from '../../services/demande.service';
import {Demande} from '../model/demande';

@Component({
  selector: 'app-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.css']
})
export class EditDemandeComponent implements OnInit {

  private demande: Demande = new Demande();
  private create = true;
  private demandeOld: Demande = null;
  private index: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private demandeService: DemandeService) {
    this.activatedRoute.params.subscribe(params => {
      if (params.index) {
        this.index = params.index;
        this.create = false;
        this.demande = this.demandeService.demandes[params.index];
        this.demandeOld = new Demande (this.demande.idDemande, this.demande.message, this.demande.artisan, this.demande.client,
            this.demande.service, this.demande.metier, this.demande.statut, this.demande.date);
      }
    });
  }
  public save() {
    this.demandeService.insert(this.demande).subscribe(resutlt => {
      this.router.navigate(['/demande']);
    });
  }

  ngOnInit() {
  }

}
