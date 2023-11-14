import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolsComponent } from './vols/vols.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { FormsModule } from '@angular/forms';
import { UpdateVolComponent } from './update-vol/update-vol.component';

@NgModule({
  declarations: [
    AppComponent,
    VolsComponent,
    AddVolComponent,
    UpdateVolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
