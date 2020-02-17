import { Component, OnInit } from '@angular/core';
import {ServiceJava} from '../../model/service-java';
import {Router} from '@angular/router';
import {ServiceJavaService} from '../../../services/service-java-service';

@Component({
  selector: 'app-add-service-java',
  templateUrl: './add-service-java.component.html',
  styleUrls: ['./add-service-java.component.css']
})
export class AddServiceJavaComponent implements OnInit {

  private service: ServiceJava = new ServiceJava();

  constructor(private serviceJavaService: ServiceJavaService, private router: Router) { }

  ngOnInit() {
  }

  public save() {
    this.serviceJavaService.insert(this.service).subscribe(resutlt => {
      this.router.navigate(['/service']);
    });
  }
}
