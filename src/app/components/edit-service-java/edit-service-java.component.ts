import { Component, OnInit } from '@angular/core';
import {ServiceJava} from '../../model/service-java';
import {ServiceJavaService} from '../../../services/service-java-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-service-java',
  templateUrl: './edit-service-java.component.html',
  styleUrls: ['./edit-service-java.component.css']
})
export class EditServiceJavaComponent implements OnInit {

  private service: ServiceJava = new ServiceJava();
  private create = true;
  private serviceOld: ServiceJava = null;
  private index: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private serviceJavaService: ServiceJavaService) {
    this.activatedRoute.params.subscribe(params => {
      if (params.index) {
        this.index = params.index;
        this.create = false;
        this.service = this.serviceJavaService.services[params.index];
        this.serviceOld = new ServiceJava(this.service.idService, this.service.nomService, this.service.metier);
      }
    });
  }

  ngOnInit() {
  }

  public save() {
    if (this.create) {
      this.serviceJavaService.ajoutServiceJava(this.service);
    }
    this.router.navigate(['/editServiceJava']);
  }

  public cancel() {
    if (!this.create) {
      // this.clientService.clients[this.index] = this.clientOld;
      this.serviceJavaService.services[this.index] = this.serviceOld ;
    }
    this.router.navigate(['/editServiceJava']);
  }
}
