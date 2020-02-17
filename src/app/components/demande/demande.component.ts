import { Component, OnInit } from '@angular/core';
import {Demande} from '../../model/demande';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  private demandes: Demande[] = [];

  constructor() { }

  ngOnInit() {
  }

}
