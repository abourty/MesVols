import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VolService } from '../services/vol.service';
import { Vol } from '../model/vol.model';
import { Pilote } from '../model/pilote.model';

@Component({
  selector: 'app-update-vol',
  templateUrl: './update-vol.component.html',

  styles: []

})
export class UpdateVolComponent  implements OnInit {
  currentVol = new Vol();
  pilotes! : Pilote[];
  updatedPilId! : number;

constructor(private activatedRoute: ActivatedRoute,
  private router :Router,

private volService: VolService) { }
ngOnInit() :void{
//console.log(this.activatedRoute.snapshot.params['id']);
this.pilotes = this.volService.listePilotes();

this.currentVol = this.volService.consulterVol(this.activatedRoute.snapshot. params['id']);

this.updatedPilId=this.currentVol.pilote.idPil;
//console.log(this.currentVol);
}

updateVol()
{
 // console.log(this.currentVol);
this.currentVol.pilote=this.volService.consulterPilotes(this.updatedPilId);
this.volService.updateVol(this.currentVol);
this.router.navigate(['vols']);



}
}


