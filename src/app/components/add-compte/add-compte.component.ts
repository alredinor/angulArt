import { Component, OnInit } from '@angular/core';
import {Metier} from '../../model/metier';
import {Compte} from '../../model/compte';
import {Router} from '@angular/router';
import {CompteService} from '../../../services/compte.service';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {

  private compte: Compte = new Compte();

  constructor(private router: Router, private compteService: CompteService) {

  }

  public save() {
    this.compteService.insert(this.compte).subscribe(resutlt => {
      this.router.navigate(['/compte']);
    });
  }

  ngOnInit() {
  }

}
