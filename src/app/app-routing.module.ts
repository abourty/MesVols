import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolsComponent } from './vols/vols.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { UpdateVolComponent } from './update-vol/update-vol.component';

const routes: Routes = [
  {path: "vols", component : VolsComponent},
  {path: "add-vol", component : AddVolComponent},

  {path: "updateVol/:id", component: UpdateVolComponent},
  { path: "", redirectTo: "vols", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
