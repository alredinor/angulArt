import { Component, OnInit } from '@angular/core';
import {Compte} from '../../model/compte';
import {CompteService} from '../../../services/compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  comptes: Compte[] = [];

  constructor(private compteService: CompteService) {

  }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.compteService.findAll().subscribe( result => {
      //console.log(result);
      this.comptes = result;
    });
  }

  public delete(id: number) {
    this.compteService.delete(id).subscribe( result => {
      this.list();
    });
  }

}
