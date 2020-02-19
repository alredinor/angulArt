import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulArt';
  private compte = sessionStorage.getItem('compte');

  get token() {
    return sessionStorage.getItem('token');
  }
}
