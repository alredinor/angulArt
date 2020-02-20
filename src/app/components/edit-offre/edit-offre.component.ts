import { Component, OnInit } from '@angular/core';
import {Demande} from '../../model/demande';
import {Offre} from '../../model/offre';
import {ActivatedRoute, Router} from '@angular/router';
import {DemandeService} from '../../../services/demande.service';
import {OffreService} from '../../../services/offre.service';

@Component({
  selector: 'app-edit-offre',
  templateUrl: './edit-offre.component.html',
  styleUrls: ['./edit-offre.component.css']
})
export class EditOffreComponent implements OnInit {

  private offre: Offre = new Offre();
  private index: number;
  private  offreOld: Offre = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private offreService: OffreService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.offre.idOffre = params[this.offre];
      if (params.offre.idOffre) {
        this.offre.idOffre = params.offre.idOffre;
        this.offre = this.offreService.findAll()[params.offre.idOffre];
        this.offreOld = new Offre(this.offre.idOffre, this.offre.service, this.offre.metier, this.offre.artisan);
      }
    });
  }

  public save() {
   // this.activatedRoute.paramMap.subscribe(param => {
   //    this.offreService.edit(this.offre, param.params.idOffre).subscribe(resutlt => {this.router.navigate(['/offre']);
   //  });

    this.offreService.edit(this.offre, this.offre.idOffre).subscribe(resutlt => {
      this.router.navigate(['/offre/edit']);
    });

  }

  ngOnInit(){
  }

}
