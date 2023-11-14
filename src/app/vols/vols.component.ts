import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';



@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.css']
})
export class VolsComponent implements OnInit {
  vols : Vol[];

  constructor( private volService: VolService ) {
    this.vols = volService.listeVols();
    }
    supprimerVol(v: Vol)
    {
      let conf = confirm("Etes-vous sûr ?");
       if (conf)
       this.volService.supprimerVol(v);
    }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
