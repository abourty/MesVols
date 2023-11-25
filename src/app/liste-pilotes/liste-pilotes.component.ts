import { Component, OnInit } from '@angular/core';
import { Pilote } from '../model/pilote.model';
import { VolService } from '../services/vol.service';

@Component({
  selector: 'app-liste-pilotes',
  templateUrl: './liste-pilotes.component.html',
  styleUrls: ['./liste-pilotes.component.css']
})
export class ListePilotesComponent implements OnInit {

  ajout:boolean=true;
  pilotes! : Pilote[];
  updatedPil : Pilote = {
    "idPil": 0, "nomPil": "",
    "numeroLicensePil": ""
  };

  constructor(private volService : VolService) { }
ngOnInit(): void {
this.volService.listePilotes().
subscribe(pils => {this.pilotes = pils._embedded.pilotes;
console.log(pils);
});
}


piloteUpdated(pil:Pilote){
  console.log("Pil updated event",pil);
  this.volService.ajouterPilote(pil).
subscribe( ()=> this.chargerPilotes());
  }

  chargerPilotes(){
    this.volService.listePilotes().
    subscribe(pils => {this.pilotes = pils._embedded.pilotes;
    console.log(pils);
    });
    }


    updatePil(pil:Pilote) {
      this.updatedPil=pil;
      this.ajout=false;
      }



}
