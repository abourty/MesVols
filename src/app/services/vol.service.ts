import { Injectable } from '@angular/core';

import { Vol } from '../model/vol.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PiloteWrapper } from '../model/piloteWrapped.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root',
})
export class VolService {
  apiURL: string = 'http://localhost:8084/vols/api';
  apiURLPil: string = 'http://localhost:8084/vols/pil';

  vols!: Vol[]; //un tableau de Produit
  vol!: Vol;
  //pilotes! : Pilote[];

  constructor(private http: HttpClient) {
    /*this.pilotes = [
                   {idPil : 1, nomPil : "abir", numeroLicensePil:"584jhgjg"},
                   {idPil : 2, nomPil : "rihab", numeroLicensePil:"123hgfgv"},
                   {idPil : 3, nomPil : "iram", numeroLicensePil:"8469gfgjn"}
                  ];*/
    /*this.vols = [
              {idVol : 1, compagnieAerienneVol : "tunisaire", origineVol : "tunisie", destinationVol :"france",prixVol:1000 , date
              : new Date("01/03/2023"),  pilote:{idPil : 1, nomPil : "abir", numeroLicensePil:"584jhgjg"}},
              {idVol : 2, compagnieAerienneVol : "tunisaire", origineVol : "tunisie", destinationVol :"italie",prixVol:1500 , date
              : new Date("01/06/2023"), pilote:{idPil : 2, nomPil : "rihab", numeroLicensePil:"123hgfgv"}},
              {idVol : 3, compagnieAerienneVol : "tunisaire", origineVol : "tunisie", destinationVol :"grece",prixVol:2000 , date
              : new Date("01/12/2022"), pilote: {idPil : 3, nomPil : "iram", numeroLicensePil:"8469gfgjn"}}
            ];*/
  }
  listeVols(): Observable<Vol[]> {
    return this.http.get<Vol[]>(this.apiURL);
  }

  ajouterVol(prod: Vol): Observable<Vol> {
    return this.http.post<Vol>(this.apiURL, prod, httpOptions);
  }

  supprimerVol(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterVol(id: number): Observable<Vol> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Vol>(url);
  }

  trierVols() {
    this.vols = this.vols.sort((n1, n2) => {
      if (n1.idVol! > n2.idVol!) {
        return 1;
      }
      if (n1.idVol! < n2.idVol!) {
        return -1;
      }
      return 0;
    });
  }

  updateVol(vo: Vol): Observable<Vol> {
    return this.http.put<Vol>(this.apiURL, vo, httpOptions);
  }

  listePilotes(): Observable<PiloteWrapper> {
    return this.http.get<PiloteWrapper>(this.apiURLPil);
  }

  rechercherParPilote(idPil: number): Observable<Vol[]> {
    const url = `${this.apiURL}/vopil/${idPil}`;
    return this.http.get<Vol[]>(url);
  }

  rechercherParDestination(destination: string): Observable<Vol[]> {
    const url = `${this.apiURL}/voByDestination/${destination}`;
    return this.http.get<Vol[]>(url);
  }
}
