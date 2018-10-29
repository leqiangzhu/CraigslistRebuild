import { Injectable } from '@angular/core';
import { RANTS } from './mock-rants';
import {RantRave} from './rant-rave.model';

@Injectable()
export class RantService {

  constructor() { }

  getRants(){
    return RANTS;
  }

  getRantsById(rantId: number){
    for(var i=0; i<= RANTS.length -1; i++){
      if(RANTS[i].id === rantId){
        return RANTS[i];
      }
    }
  }

}
