import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddVolComponent } from './add-vol/add-vol.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RechercheParDestinationComponent } from './recherche-par-destination/recherche-par-destination.component';
import { RechercheParPiloteComponent } from './recherche-par-pilote/recherche-par-pilote.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { UpdateVolComponent } from './update-vol/update-vol.component';
import { VolsComponent } from './vols/vols.component';
import { ListePilotesComponent } from './liste-pilotes/liste-pilotes.component';
import { UpdatePiloteComponent } from './update-pilote/update-pilote.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    VolsComponent,
    AddVolComponent,
    UpdateVolComponent,
    RechercheParPiloteComponent,
    RechercheParDestinationComponent,
    SearchFilterPipe,
    ListePilotesComponent,
    UpdatePiloteComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
