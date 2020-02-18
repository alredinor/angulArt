import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/client';
import {Router} from '@angular/router';
import {CompteService} from '../../../services/compte.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  private client: Client = new Client();

  constructor(private router: Router, private compteService: CompteService) { }

  ngOnInit() {
  }

  public saveClient() {
    this.compteService.insertClient(this.client).subscribe(result => {
      this.router.navigate(['/compte']);
    });
  }

}
