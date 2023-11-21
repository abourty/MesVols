import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';

@Component({
  selector: 'app-recherche-par-destination',
  templateUrl: './recherche-par-destination.component.html',
  styleUrls: ['./recherche-par-destination.component.css']
})
export class RechercheParDestinationComponent implements OnInit {
  destinationVol!: string;
  vols!:Vol[];
  allVols! : Vol[];
  searchTerm!: string;
  constructor(private volService:VolService){}


  ngOnInit(): void {
    this.volService.listeVols().subscribe(vo => {
      console.log(vo);
      this.vols = vo;
      });

  }

  onKeyUp(filterText : string){
    this.vols = this.allVols.filter(item =>
    item.destinationVol.toLowerCase().includes(filterText));
    }
  rechercherVol(){
    this.volService.rechercherParDestination(this.destinationVol).
    subscribe(vo => {
    this.vols = vo;
    console.log(vo)});
    }

}
