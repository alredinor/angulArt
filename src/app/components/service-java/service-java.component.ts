import { Component, OnInit } from '@angular/core';
import {ServiceJava} from '../../model/service-java';
import {ServiceJavaService} from '../../../services/service-java-service';

@Component({
  selector: 'app-service-java',
  templateUrl: './service-java.component.html',
  styleUrls: ['./service-java.component.css']
})
export class ServiceJavaComponent implements OnInit {

  private services: ServiceJava [] = [];
  constructor(private serviceJavaService: ServiceJavaService) { }

  ngOnInit() {
    this.list();
  }

  // liste des services
  private list(){
    this.serviceJavaService.findAll().subscribe(result => {
      console.log(result);
      this.services = result;
    }, error1 => {
      console.log('pas bien');
    });
  }

  // suppression du service par son nom
  public delete(nomService: string) {
    this.serviceJavaService.delete(nomService).subscribe(result => {
      this.list();
    });
  }

}
