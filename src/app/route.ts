import {Route} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {ArtisanComponent} from './components/artisan/artisan.component';
import {ClientComponent} from './components/client/client.component';
import {CompteComponent} from './components/compte/compte.component';
import {DemandeComponent} from './components/demande/demande.component';
import {MetierComponent} from './components/metier/metier.component';
import {ServiceComponent} from './components/service/service.component';
import {AddDemandeComponent} from './components/add-demande/add-demande.component';

export const routes: Route[] = [
    {path: 'admin', component: AdminComponent},
    {path: 'artisan', component: ArtisanComponent},
    {path: 'client', component: ClientComponent},
    {path: 'compte', component: CompteComponent},
    {path: 'demande', component: DemandeComponent},
    {path: 'metier', component: MetierComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'demade/add', component: AddDemandeComponent}
]
