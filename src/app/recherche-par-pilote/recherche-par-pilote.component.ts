
import { Component, OnInit } from '@angular/core';
import { Pilote } from '../model/pilote.model';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';

@Component({
  selector: 'app-recherche-par-pilote',
  templateUrl: './recherche-par-pilote.component.html',
  styleUrls: ['./recherche-par-pilote.component.css']
})
export class RechercheParPiloteComponent implements OnInit {

vols! : Vol[];
IdPilote! : number;
pilotes! : Pilote[];

constructor(private volService:VolService) {

}

ngOnInit(): void {
  this.volService.listePilotes().
  subscribe(pils => {this.pilotes = pils._embedded.pilotes;
  console.log(pils);
  });
  }

  onChange() {
    this.volService.rechercherParPilote(this.IdPilote).
      subscribe(prods =>{this.vols=prods});

    }
}

