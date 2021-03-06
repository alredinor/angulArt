import {Route} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {ArtisanComponent} from './components/artisan/artisan.component';
import {ClientComponent} from './components/client/client.component';
import {CompteComponent} from './components/compte/compte.component';
import {DemandeComponent} from './components/demande/demande.component';
import {MetierComponent} from './components/metier/metier.component';
import {AddDemandeComponent} from './components/add-demande/add-demande.component';
import {ServiceJavaComponent} from './components/service-java/service-java.component';
import {AddMetierComponent} from './components/add-metier/add-metier.component';
import {AddServiceJavaComponent} from './components/add-service-java/add-service-java.component';
import {AddCompteComponent} from './components/add-compte/add-compte.component';
import {EditServiceJavaComponent} from './components/edit-service-java/edit-service-java.component';
import {AddArtisanComponent} from './components/add-artisan/add-artisan.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {HomeComponent} from './components/home/home.component';
import {EditDemandeComponent} from './components/edit-demande/edit-demande.component';
import {OffreComponent} from './components/offre/offre.component';
import {LoginComponent} from './components/login/login.component';
import {AddOffreComponent} from './components/add-offre/add-offre.component';
import {ErreurAuthentificationComponent} from './components/erreur-authentification/erreur-authentification.component';
import { EditCompteComponent } from './components/edit-compte/edit-compte.component';
import { EditOffreComponent } from './components/edit-offre/edit-offre.component';

export const routes: Route[] = [
    {path: 'admin', component: AdminComponent},
    {path: 'artisan', component: ArtisanComponent},
    {path: 'client', component: ClientComponent},
    {path: 'compte', component: CompteComponent},
    {path: 'demande', component: DemandeComponent},
    {path: 'metier', component: MetierComponent},
    {path: 'service', component: ServiceJavaComponent},
    {path: 'service/edit/:idService', component: EditServiceJavaComponent},
    {path: 'service/add', component: AddServiceJavaComponent},
    {path: 'demande/add', component: AddDemandeComponent},
    {path: 'metier/add', component: AddMetierComponent},
    {path: 'compte/add', component: AddCompteComponent},
    {path: 'demande/edit/:idDemande', component: EditDemandeComponent},
    {path: 'compte/addArtisan', component: AddArtisanComponent},
    {path: 'compte/addClient', component: AddClientComponent},
    {path: 'home', component: HomeComponent},
    {path: 'offre', component: OffreComponent},
    {path: 'login', component: LoginComponent},
    {path: 'offre/add', component: AddOffreComponent},
    {path: 'error/login', component: ErreurAuthentificationComponent},
    {path: 'compte/edit/:idCompte', component: EditCompteComponent},
    {path: 'offre/edit/:offre.idOffre', component: EditOffreComponent}
]
