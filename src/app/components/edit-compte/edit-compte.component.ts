import { Component, OnInit } from '@angular/core';
import {Compte} from '../../model/compte';
import {CompteService} from '../../../services/compte.service';

@Component({
  selector: 'app-edit-compte',
  templateUrl: './edit-compte.component.html',
  styleUrls: ['./edit-compte.component.css']
})
export class EditCompteComponent implements OnInit {

  private compte: Compte;

  constructor(private compteService: CompteService) {

  }

  ngOnInit() {}



}
