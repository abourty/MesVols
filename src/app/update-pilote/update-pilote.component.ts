import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pilote } from '../model/pilote.model';

@Component({
  selector: 'app-update-pilote',
  templateUrl: './update-pilote.component.html',
  styleUrls: ['./update-pilote.component.css'],


})
export class UpdatePiloteComponent implements OnInit {

  @Input()
  pilote! : Pilote;

  @Output()
  piloteUpdated = new EventEmitter<Pilote>();

  @Input()
  ajout!:boolean;
  
  constructor() {}
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdatePilote ",this.pilote);

  }

  savePilote(){


      this.piloteUpdated.emit(this.pilote);
      }

}
