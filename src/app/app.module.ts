import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { CompteComponent } from './components/compte/compte.component';
import { ServiceComponent } from './components/service/service.component';
import { ArtisanComponent } from './components/artisan/artisan.component';
import { ClientComponent } from './components/client/client.component';
import { DemandeComponent } from './components/demande/demande.component';
import { AdminComponent } from './components/admin/admin.component';
import { MetierComponent } from './components/metier/metier.component';
import { AddDemandeComponent } from './components/add-demande/add-demande.component';




@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    ServiceComponent,
    ArtisanComponent,
    ClientComponent,
    DemandeComponent,
    AdminComponent,
    MetierComponent,
    AddDemandeComponent,

  ],
  imports: [
    BrowserModule, FormsModule, /*RouterModule.forRoot(routes),*/ HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
