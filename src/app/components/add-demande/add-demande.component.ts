import { Component, OnInit } from '@angular/core';
import {Demande} from '../../model/demande';
import {Router} from '@angular/router';
import {DemandeService} from '../../../services/demande.service';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css']
})
export class AddDemandeComponent implements OnInit {

  private demande: Demande = new Demande();

  constructor(private router: Router, private demandeService: DemandeService) { }

  public save() {
    this.demandeService.insert(this.demande).subscribe(resutlt => {
      this.router.navigate(['/demande']);
    });
  }

  ngOnInit() {
  }

}
