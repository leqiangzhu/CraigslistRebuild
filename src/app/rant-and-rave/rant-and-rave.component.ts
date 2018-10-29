import { Component, OnInit } from '@angular/core';
import { RantRave } from '../rant-rave.model';

@Component({
  selector: 'app-rant-and-rave',
  templateUrl: './rant-and-rave.component.html',
  styleUrls: ['./rant-and-rave.component.css']
})
export class RantAndRaveComponent {

  rants: RantRave [] = [
    new RantRave ("10/29/2018", "How Many X-Hubbies? ","Kent, Wa","HOW MANY X Hubbies? SEVERAL!! (More than 3) Going for a new record, until, the grandaughters come of age, right? Lying thieving cunts NEVER change!"),
    new RantRave("10/29/2018","Maria Cantwell's new TV Ad",)

  ]
}
