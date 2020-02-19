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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private offreService: OffreService) {

  }

  public save() {

    this.offreService.edit(this.offre, this.offre.idOffre).subscribe(resutlt => {
      this.router.navigate(['/offre']);
    });
  }

  ngOnInit() {
  }

}
