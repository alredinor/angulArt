import { Component, OnInit } from '@angular/core';
import {Metier} from '../../model/metier';
import {MetierService} from '../../../services/metier.service';

@Component({
  selector: 'app-metier',
  templateUrl: './metier.component.html',
  styleUrls: ['./metier.component.css']
})
export class MetierComponent implements OnInit {

  metiers: Metier[] = [];

  constructor(private metierService: MetierService) {

  }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.metierService.findAll().subscribe( result => {
      //console.log(result);
      this.metiers = result;
    });
  }

  public delete(id: number) {
    this.metierService.delete(id).subscribe( result => {
      this.list();
    });
  }

}
