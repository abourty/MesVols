
import { Component, OnInit } from '@angular/core';
import { Pilote } from '../model/pilote.model';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';

@Component({
  selector: 'app-recherche-par-pilote',
  templateUrl: './recherche-par-pilote.component.html',
  styleUrls: []
})
export class RechercheParPiloteComponent implements OnInit {

IdPilote! : number;
vols! : Vol[];
pilotes! : Pilote[];

constructor(private volService : VolService) {

}

ngOnInit(): void {
  this.volService.listePilotes().
  subscribe(pils => {
    this.pilotes = pils._embedded.pilotes;
  console.log(pils);
  });
  }

  onChange() {
    this.volService.rechercherParPilote(this.IdPilote).
      subscribe(vo =>{this.vols=vo});

    }
}

