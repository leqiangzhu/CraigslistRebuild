import { Component, OnInit } from '@angular/core';
import { RantRave } from '../rant-rave.model';
import { Router } from '@angular/router';
import { RantService } from '../rant.service';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-rant-and-rave',
  templateUrl: './rant-and-rave.component.html',
  styleUrls: ['./rant-and-rave.component.css'],
  providers:[RantService]
})
export class RantAndRaveComponent implements OnInit{

  rants: FirebaseListObservable<any[]>;

  ngOnInit(){
    this.rants = this.rantService.getRants();
  }

  // rants: RantRave [];

  constructor(private router: Router, private rantService: RantService){}

  goToDetailPage(clickedRant: RantRave){
    this.router.navigate(['rants', clickedRant.id])
  };
  newRant=null;
  addRants(){
    let addRant=new RantRave();
    this.newRant=addRant;
    this.rants.push(this.newRant);
  }

}
