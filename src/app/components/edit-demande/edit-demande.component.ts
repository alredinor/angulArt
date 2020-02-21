import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, convertToParamMap, Router} from '@angular/router';
import {DemandeService} from '../../../services/demande.service';
import {Demande} from '../../model/demande';
import {StatutDemande} from '../../statut-demande.enum';

@Component({
  selector: 'app-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.css']
})
export class EditDemandeComponent implements OnInit {

  private demande: Demande = new Demande();
  private demandeOld: Demande = null;
  private statut: StatutDemande;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private demandeService: DemandeService) {

    this.activatedRoute.params.subscribe(params => {
      if (params.demande.idDemande) {
        this.demande.idDemande = params.demande.idDemande;
        this.demande = this.demandeService.findAll[params.demande.idDemande];
        this.demandeOld = new Demande (this.demande.idDemande, this.demande.message,
            this.demande.client, this.demande.statut, this.demande.date, this.demande.offre);
      }
    });
  }
  public save() {

    // this.demandeService.edit(this.demande, this.demande.idDemande).subscribe(resutlt => {
    //   this.router.navigate(['/demande']);
    // });
    this.activatedRoute.paramMap.subscribe(param => {
      this.demandeService.edit(this.demande, param.params.idDemande).subscribe(resutlt => {this.router.navigate(['/demande']);
      });
     });
  }

  public cancel() {

      this.demandeService._demandes[this.demande.idDemande] = this.demandeOld;

      this.router.navigate(['/demande']);
  }
  ngOnInit() {
  }

}
