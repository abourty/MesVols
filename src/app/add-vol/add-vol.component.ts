import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';

import { Router } from '@angular/router';
import { Pilote } from '../model/pilote.model';
import { VolService } from '../services/vol.service';


@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.css']
})
export class AddVolComponent  implements OnInit{


  newVol = new Vol();
  pilotes! : Pilote[];
  newIdPil! : number;
  newPilote! : Pilote;
  constructor(private volService: VolService ,private router :Router) { }

  ngOnInit(): void {
    this.volService.listePilotes().
    subscribe(pils => {console.log(pils);
      this.pilotes = pils._embedded.pilotes;
      }
    );
    }


  addVol(){
    this.newVol.pilote = this.pilotes.find(pil => pil.idPil == this.newIdPil)!;
    this.volService.ajouterVol(this.newVol) .subscribe(vo => {
    console.log(vo);
    this.router.navigate(['vols']);
    });
    }

  }
