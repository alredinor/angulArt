import { Component, OnInit } from '@angular/core';
import {Demande} from '../../model/demande';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css']
})
export class AddDemandeComponent implements OnInit {

  private demande: Demande = new Demande('100');

  constructor(private router: Router, private demandeService) { }

  public save(){
    this.demandeService.insert(this)
  }

  ngOnInit() {
  }

}
