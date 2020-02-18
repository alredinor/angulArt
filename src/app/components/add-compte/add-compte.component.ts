import { Component, OnInit } from '@angular/core';
import {Metier} from '../../model/metier';
import {Compte} from '../../model/compte';
import {Router} from '@angular/router';
import {CompteService} from '../../../services/compte.service';
import {Artisan} from '../../model/artisan';
import {Client} from '../../model/client';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {

  //private compte: Compte = new Compte();
  private artisan: Artisan = new Artisan();
  private client: Client = new Client();

  constructor(private router: Router, private compteService: CompteService) {

  }

  /*public save() {
    this.compteService.insert(this.compte).subscribe(resutlt => {
      this.router.navigate(['/compte']);
    });
  }*/

  public saveArtisan() {
    this.compteService.insertArtisan(this.artisan).subscribe(result => {
      this.router.navigate(['/compte']);
    });
  }

  public saveClient() {
    this.compteService.insertClient(this.client).subscribe(result => {
      this.router.navigate(['/compte']);
    });
  }

  ngOnInit() {
  }

}
