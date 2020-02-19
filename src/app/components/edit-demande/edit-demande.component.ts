import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DemandeService} from '../../../services/demande.service';
import {Demande} from '../../model/demande';
import {StatutDemande} from '../../statut-demande.enum';
import {EnumValue} from '@angular/compiler-cli/src/ngtsc/partial_evaluator';

@Component({
  selector: 'app-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.css']
})
export class EditDemandeComponent implements OnInit {

  private demande: Demande = new Demande();
  private demandeOld: Demande = null;
  private index: number;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private demandeService: DemandeService) {

    this.activatedRoute.params.subscribe(params => {
      if (params.index) {
        this.demande.idDemande = params.index;
        this.demande = this.demandeService.findAll()[params.index];
        this.demandeOld = new Demande (this.demande.idDemande, this.demande.message,
            this.demande.client, this.demande.statut, this.demande.date, this.demande.offre);
      }
    });
  }
  public save() {

      this.demandeService.edit(this.demande, this.demande.idDemande).subscribe(resutlt => {
        this.router.navigate(['/demande']);
      });
  }
  ngOnInit() {
  }

}
