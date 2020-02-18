import { Component, OnInit } from '@angular/core';
import {Demande} from '../../model/demande';
import {DemandeService} from '../../../services/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  private demandes: Demande[] = [];

  constructor(private demandeService: DemandeService) { }

  ngOnInit() {
    this.list();
  }
private list() {
    this.demandeService.findAll().subscribe(result => {
      this.demandes = result;
    });
}

public delete(id: number) {
    this.demandeService.delete(id).subscribe(result =>{
      this.list();
    });
}
}
