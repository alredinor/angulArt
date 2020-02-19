import { Component, OnInit } from '@angular/core';
import {Compte} from '../../model/compte';
import {CompteService} from '../../../services/compte.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-compte',
  templateUrl: './edit-compte.component.html',
  styleUrls: ['./edit-compte.component.css']
})
export class EditCompteComponent implements OnInit {

  private compte: Compte;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private compteService: CompteService) {
  }

  public save() {

    this.compteService.edit(this.compte, this.compte.idCompte).subscribe(resutlt => {
      this.router.navigate(['/compte']);
    });
  }

  ngOnInit() {}



}
