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

export const routes: Route[] = [
    {path: 'admin', component: AdminComponent},
    {path: 'artisan', component: ArtisanComponent},
    {path: 'client', component: ClientComponent},
    {path: 'compte', component: CompteComponent},
    {path: 'demande', component: DemandeComponent},
    {path: 'metier', component: MetierComponent},
    {path: 'service', component: ServiceJavaComponent},
    {path: 'service/add', component: AddServiceJavaComponent},
    {path: 'demande/add', component: AddDemandeComponent},
    {path: 'metier/add', component: AddMetierComponent}
]
