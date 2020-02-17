import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Compte} from '../../model/compte';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input()
  private newClient: Compte;

  @Output()
  private enregistrer: EventEmitter<Compte> = new EventEmitter<Compte>();

  constructor() { }

  ngOnInit() {
  }

  public display(): boolean {
    if(this.newClient.login && this.newClient.mdp && this.newClient.idCompte && this.newClient.email && this.newClient.adresse && this.newClient.enable && this.newClient.roles) {
      return true;
    }
    return false;
  }

  public AjouterClient(newClient) {
    this.enregistrer.emit(this.newClient);
    this.newClient = new Compte();
  }

}
