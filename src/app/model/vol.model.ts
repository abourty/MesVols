import { Pilote } from "./pilote.model";

export class Vol {
  idVol! : number;
  compagnieAerienneVol!: string;
  origineVol! : string ;
  destinationVol!: string ;
  prixVol! : number;
  date! : Date ;
  pilote! : Pilote;
  }


