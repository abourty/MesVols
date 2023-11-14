import { Injectable } from '@angular/core';

import { Vol } from '../model/vol.model';
import { Pilote } from '../model/pilote.model';

@Injectable({
providedIn: 'root'
})
export class VolService {
vols!: Vol[]; //un tableau de Produit
vol!:Vol;
pilotes! : Pilote[];

constructor() {
  this.pilotes = [
                   {idPil : 1, nomPil : "abir", numeroLicensePil:"584jhgjg"},
                   {idPil : 2, nomPil : "rihab", numeroLicensePil:"123hgfgv"},
                   {idPil : 3, nomPil : "iram", numeroLicensePil:"8469gfgjn"}
                  ];


this.vols = [
              {idVol : 1, compagnieAerienneVol : "tunisaire", origineVol : "tunisie", destinationVol :"france",prixVol:1000 , date
              : new Date("01/03/2023"),  pilote:{idPil : 1, nomPil : "abir", numeroLicensePil:"584jhgjg"}},
              {idVol : 2, compagnieAerienneVol : "tunisaire", origineVol : "tunisie", destinationVol :"italie",prixVol:1500 , date
              : new Date("01/06/2023"), pilote:{idPil : 2, nomPil : "rihab", numeroLicensePil:"123hgfgv"}},
              {idVol : 3, compagnieAerienneVol : "tunisaire", origineVol : "tunisie", destinationVol :"grece",prixVol:2000 , date
              : new Date("01/12/2022"), pilote: {idPil : 3, nomPil : "iram", numeroLicensePil:"8469gfgjn"}}
            ];

          }
listeVols():Vol[] {

  return this.vols;
}




ajouterVol( vo: Vol){
this.vols.push(vo);
}

supprimerVol( vo: Vol){
  //supprimer le vol vo du tableau vols
  const index = this.vols.indexOf(vo, 0);
  if (index > -1) {
  this.vols.splice(index, 1);
  }
  //ou Bien
  /*this.vols.forEach((cur, index) => {
  if(vo.idVol === cur.idVol) {
  this.vols.splice(index, 1);
  }
  });*/
  }


  consulterVol(id:number): Vol{
    this.vol = this.vols.find(v => v.idVol == id)!;
    return this.vol;
    }

    trierVols(){
      this.vols = this.vols.sort((n1,n2) => {
      if (n1.idVol! > n2.idVol!) {
      return 1;
      }
      if (n1.idVol! < n2.idVol!) {
      return -1;
      }
      return 0;
      });
      }

    updateVol(v:Vol)
    {
    this.supprimerVol(v);
    this.ajouterVol(v);
    this.trierVols();
    }

    listePilotes():Pilote[] {
      return this.pilotes;
      }

      consulterPilotes(id:number): Pilote{
        return this.pilotes.find(pil => pil.idPil == id)!;
        }



}
