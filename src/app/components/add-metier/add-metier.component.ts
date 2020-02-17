import { Component, OnInit } from '@angular/core';
import {Metier} from '../../model/metier';
import {Router} from '@angular/router';
import {MetierService} from '../../../services/metier.service';

@Component({
  selector: 'app-add-metier',
  templateUrl: './add-metier.component.html',
  styleUrls: ['./add-metier.component.css']
})
export class AddMetierComponent implements OnInit {

  private metier: Metier = new Metier();

  constructor(private router: Router, private metierService: MetierService) {

  }

  public save() {
    this.metierService.insert(this.metier).subscribe(resutlt => {
      this.router.navigate(['/metier']);
    });
  }

  ngOnInit() {
  }

}
