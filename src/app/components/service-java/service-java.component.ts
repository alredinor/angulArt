import { Component, OnInit } from '@angular/core';
import {ServiceJava} from '../../model/service-java';

@Component({
  selector: 'app-service-java',
  templateUrl: './service-java.component.html',
  styleUrls: ['./service-java.component.css']
})
export class ServiceJavaComponent implements OnInit {

  private services: ServiceJava [] = [];
  constructor() { }

  ngOnInit() {
  }

}
