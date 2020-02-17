import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Compte} from '../../model/compte';

@Component({
  selector: 'app-artisan',
  templateUrl: './artisan.component.html',
  styleUrls: ['./artisan.component.css']
})
export class ArtisanComponent implements OnInit {

  @Input()
  private newArtisan: Compte = new Compte();

  @Output()
  private enregistrer: EventEmitter<Compte> = new EventEmitter<Compte>();

  constructor() { }

  ngOnInit() {
  }

  public display(): boolean {
    if(this.newArtisan.login && this.newArtisan.mdp && this.newArtisan.idCompte && this.newArtisan.email && this.newArtisan.adresse && this.newArtisan.enable && this.newArtisan.roles) {
      return true;
    }
    return false;
  }

  public AjouterArtisan(newArtisan) {
    this.enregistrer.emit(this.newArtisan);
    this.newArtisan = new Compte();
  }

}
