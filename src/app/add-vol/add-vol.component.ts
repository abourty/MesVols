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

  ngOnInit() {
    this.pilotes = this.volService.listePilotes();
  }

  addVol(){
    console.log(this.newIdPil);
    this.newPilote =this.volService.consulterPilotes(this.newIdPil);
    this.newVol.pilote = this.newPilote;
    this.volService.ajouterVol(this.newVol);
    this.router.navigate(['vols']);
  }
}

