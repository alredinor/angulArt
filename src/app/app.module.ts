import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { CompteComponent } from './components/compte/compte.component';
import { MetierComponent } from './components/metier/metier.component';

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    MetierComponent
  ],
  imports: [
    BrowserModule, FormsModule, /*RouterModule.forRoot(routes),*/ HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
