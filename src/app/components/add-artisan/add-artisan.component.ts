import { Component, OnInit } from '@angular/core';
import {Artisan} from '../../model/artisan';
import {Router} from '@angular/router';
import {CompteService} from '../../../services/compte.service';

@Component({
  selector: 'app-add-artisan',
  templateUrl: './add-artisan.component.html',
  styleUrls: ['./add-artisan.component.css']
})
export class AddArtisanComponent implements OnInit {

  private artisan: Artisan = new Artisan();

  constructor(private router: Router, private compteService: CompteService) { }

  ngOnInit() {
  }

  public saveArtisan() {
    this.compteService.insertArtisan(this.artisan).subscribe(result => {
      this.router.navigate(['/login']);
    });
  }

}
