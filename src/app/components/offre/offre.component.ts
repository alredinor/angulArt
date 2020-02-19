import { Component, OnInit } from '@angular/core';
import {OffreService} from '../../../services/offre.service';
import {Offre} from '../../model/offre';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  private offres: Offre[] = [];

  constructor(private offreService: OffreService) { }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.offreService.findAll().subscribe( result => {
    this.offres = result;
    });
  }

  public delete(id: number) {
    this.offreService.delete(id).subscribe( result => {
    this.list();
  });
}

}
