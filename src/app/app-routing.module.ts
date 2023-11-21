import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVolComponent } from './add-vol/add-vol.component';

import { UpdateVolComponent } from './update-vol/update-vol.component';
import { VolsComponent } from './vols/vols.component';
import { RechercheParDestinationComponent } from './recherche-par-destination/recherche-par-destination.component';
import { RechercheParPiloteComponent } from './recherche-par-pilote/recherche-par-pilote.component';

const routes: Routes = [
  {path: "vols", component : VolsComponent},
  {path: "add-vol", component : AddVolComponent},

  {path: "updateVol/:id", component: UpdateVolComponent},
  {path: "rechercheParPilote", component : RechercheParPiloteComponent},
  {path: "rechercheParDestination", component : RechercheParDestinationComponent},
  { path: "", redirectTo: "vols", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
