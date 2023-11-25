import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pilote } from '../model/pilote.model';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';

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

//console.log(this.activatedRoute.snapshot.params['id']);
//this.pilotes = this.volService.listePilotes();

ngOnInit(): void {
  this.volService.listePilotes().
  subscribe(pils => {console.log(pils);
  this.pilotes = pils._embedded.pilotes;
    }
  );
  this.volService.consulterVol(this.activatedRoute.snapshot.params['id']).
  subscribe( vo =>{ this.currentVol = vo;
  this.updatedPilId = this.currentVol.pilote.idPil;
  } ) ;
  }

updateVol() {

  this.currentVol.pilote = this.pilotes.
 find(pil => pil.idPil == this.updatedPilId)!;
  this.volService.updateVol(this.currentVol).subscribe(vo => {
  this.router.navigate(['vols']); }
  );
}

}
