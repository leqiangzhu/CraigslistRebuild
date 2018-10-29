import { Component, OnInit } from '@angular/core';
import { RantRave } from '../rant-rave.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rant-and-rave',
  templateUrl: './rant-and-rave.component.html',
  styleUrls: ['./rant-and-rave.component.css']
})
export class RantAndRaveComponent {

  constructor(private router: Router){}

  rants: RantRave [] = [
    new RantRave (1,"10/29/2018", "How Many X-Hubbies? ","Kent, Wa","HOW MANY X Hubbies? SEVERAL!! (More than 3) Going for a new record, until, the grandaughters come of age, right? Lying thieving cunts NEVER change!"),
    new RantRave(2,"10/29/2018","Wall", "Seattle, Wa","One day a wall will be builtbut its main purpose will be to keep people from leaving."),
    new RantRave(3,"10/29/2018"," my story about crooked Southwest Plumbing","Tacoma, Wa","Had a problem with toilet in basement. They came and wanted to tear up the concrete in the bathroom and repipe everything. Got another quote and all they did was hook up the pipe outside - there was no exterior piping, everything else inside was fine.God damn f---cking CROOKS!!!! DON'T EVER USE THEM!!!!")
  ]

  goToDetailPage(clickedRant: RantRave){
    this.router.navigate(['rants', clickedRant.id])
  };
}
