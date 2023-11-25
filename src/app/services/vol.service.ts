import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from '../config';
import { PiloteWrapper } from '../model/piloteWrapped.model';
import { Vol } from '../model/vol.model';
import { Pilote } from '../model/pilote.model';



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root',
})
export class VolService {

  apiURLPil: string = 'http://localhost:8084/vols/pil';

  vols!: Vol[]; //un tableau de Produit
  //vol!: Vol;
  //pilotes! : Pilote[];

  constructor(private http : HttpClient) {
    /*this.pilotes = [
                   {idPil : 1, nomPil : "abir", numeroLicensePil:"584jhgjg"},
                   {idPil : 2, nomPil : "rihab", numeroLicensePil:"123hgfgv"},
                   {idPil : 3, nomPil : "iram", numeroLicensePil:"8469gfgjn"}
                  ];*/
    this.vols = [
              {idVol : 1, compagnieAerienneVol : "tunisaire", origineVol : "tunisie", destinationVol :"france",prixVol:1000 , dateDep
              : new Date("01/03/2023"),  pilote:{idPil : 1, nomPil : "abir", numeroLicensePil:"584jhgjg"}},
              {idVol : 2, compagnieAerienneVol : "tunisaire", origineVol : "tunisie", destinationVol :"italie",prixVol:1500 , dateDep
              : new Date("01/06/2023"), pilote:{idPil : 2, nomPil : "rihab", numeroLicensePil:"123hgfgv"}},
              {idVol : 3, compagnieAerienneVol : "tunisaire", origineVol : "tunisie", destinationVol :"grece",prixVol:2000 , dateDep
              : new Date("01/12/2022"), pilote: {idPil : 3, nomPil : "iram", numeroLicensePil:"8469gfgjn"}}
            ];
  }
  listeVols(): Observable<Vol[]> {
    return this.http.get<Vol[]>(apiURL);
  }

  ajouterVol(vo: Vol): Observable<Vol> {

    return this.http.post<Vol>(apiURL, vo, httpOptions);
  }

  supprimerVol(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterVol(id: number): Observable<Vol> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Vol>(url);
  }

  trierVols() {
    this.vols = this.vols.sort((n1, n2) => {
      if (n1.idVol > n2.idVol) {
        return 1;
      }
      if (n1.idVol < n2.idVol) {
        return -1;
      }
      return 0;
    });
  }

  updateVol(vo: Vol): Observable<Vol> {
    return this.http.put<Vol>(apiURL, vo, httpOptions);
  }

  listePilotes(): Observable<PiloteWrapper> {

    return this.http.get<PiloteWrapper>(this.apiURLPil);
  }

  rechercherParPilote(idPil: number): Observable<Vol[]> {

    const url = `${apiURL}/vopil/${idPil}`;
    return this.http.get<Vol[]>(url);
  }

  // rechercherParCategorie(idPil: number): Observable<Vol[]> {
  //   const url = `${this.apiURL}/vopil/${idPil}`;
  //   return this.http.get<Vol[]>(url);
  // }




  rechercherParDestination(destination: string): Observable<Vol[]> {
    const url = `${apiURL}/voByDestination/${destination}`;
    return this.http.get<Vol[]>(url);
  }






  ajouterPilote( pil: Pilote):Observable<Pilote>{
    return this.http.post<Pilote>(this.apiURLPil, pil, httpOptions);
    }



}
