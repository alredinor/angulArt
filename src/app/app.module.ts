import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { CompteComponent } from './components/compte/compte.component';
import { ArtisanComponent } from './components/artisan/artisan.component';
import { ClientComponent } from './components/client/client.component';
import { DemandeComponent } from './components/demande/demande.component';
import { AdminComponent } from './components/admin/admin.component';
import { MetierComponent } from './components/metier/metier.component';
import { AddDemandeComponent } from './components/add-demande/add-demande.component';
import {ServiceJavaComponent} from './components/service-java/service-java.component';
import {routes} from './route';
import {ServiceJavaService} from '../services/service-java-service';
import { AddMetierComponent } from './components/add-metier/add-metier.component';
import { AddServiceJavaComponent } from './components/add-service-java/add-service-java.component';
import { EditServiceJavaComponent } from './components/edit-service-java/edit-service-java.component';
import {AddCompteComponent} from './components/add-compte/add-compte.component';
import { EditDemandeComponent } from './components/edit-demande/edit-demande.component';
import { AddArtisanComponent } from './components/add-artisan/add-artisan.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OffreComponent } from './components/offre/offre.component';
import { AddOffreComponent } from './components/add-offre/add-offre.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ErreurAuthentificationComponent } from './components/erreur-authentification/erreur-authentification.component';
import { EditOffreComponent } from './components/edit-offre/edit-offre.component';
import { EditCompteComponent } from './components/edit-compte/edit-compte.component';






@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    ArtisanComponent,
    ClientComponent,
    DemandeComponent,
    AdminComponent,
    MetierComponent,
    ServiceJavaComponent,
    AddDemandeComponent,
    AddMetierComponent,
    AddServiceJavaComponent,
    EditServiceJavaComponent,
    AddCompteComponent,
    EditDemandeComponent,
    AddArtisanComponent,
    AddClientComponent,
    HomeComponent,
    LoginComponent,
    OffreComponent,
    AddOffreComponent,
    LogoutComponent,
    ErreurAuthentificationComponent,
    EditOffreComponent,
    EditCompteComponent,


  ],
    imports: [
        BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
    ],
  providers: [ServiceJavaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
