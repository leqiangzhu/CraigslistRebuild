import { Injectable } from '@angular/core';
import { RANTS } from './mock-rants';
import {RantRave} from './rant-rave.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class RantService {
  rants: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.rants = database.list('rants');
  }

  getRants(){
    return this.rants;
  }

  addRant(newRantRave: RantRave) {
    this.rants.push(newRantRave);
  }


  getRantsById(rantId: number){
    // for(var i=0; i<= RANTS.length -1; i++){
    //   if(RANTS[i].id === rantId){
    //     return RANTS[i];
    //   }
    // }
  }

}
