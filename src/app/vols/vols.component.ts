import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.css']
})
export class VolsComponent implements OnInit {
vols! : Vol[];

  constructor( private volService: VolService,public authService: AuthService )
   {
    //this.vols = volService.listeVols();
  }


  ngOnInit(): void {
    this.chargerVols();
    }
    chargerVols(){
    this.volService.listeVols().subscribe(vo => {
    console.log(vo);
    this.vols = vo;
    });
    }
    supprimerVol(v: Vol)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.volService.supprimerVol(v.idVol).subscribe(() => {
    console.log("vol supprimé");
    this.chargerVols();
    });
    }
  }
