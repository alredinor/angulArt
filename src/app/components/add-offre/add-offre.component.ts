import { Component, OnInit } from '@angular/core';
import {Metier} from '../../model/metier';
import {Offre} from '../../model/offre';
import {Router} from '@angular/router';
import {MetierService} from '../../../services/metier.service';
import {OffreService} from '../../../services/offre.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {

  private offre: Offre = new Offre();

  constructor(private router: Router, private offreService: OffreService) { }

  ngOnInit() {
  }

  public save() {
    this.offreService.insert(this.offre).subscribe(resutlt => {
      this.router.navigate(['/offre']);
    });
  }

}
