import { Component, OnInit } from '@angular/core';
import {Demande} from '../../model/demande';
import {ActivatedRoute, Router} from '@angular/router';
import {DemandeService} from '../../../services/demande.service';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css']
})
export class AddDemandeComponent implements OnInit {

  private demande: Demande = new Demande();
  private create = true;
  private demandeOld: Demande = null;
  private index: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private demandeService: DemandeService) {
    this.activatedRoute.params.subscribe(params => {
      if (params.index) {
        this.index = params.index;
        this.create = false;
        this.demande = this.demandeService.findAll()[params.index];
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
