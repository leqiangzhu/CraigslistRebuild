import { Component, OnInit } from '@angular/core';
import { RantRave } from '../rant-rave.model';
import { RantService } from '../rant.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(date:string, title: string, location:string, details: string) {
    var newRantRave: RantRave = new RantRave (date, title,location, details)
    console.log(newRantRave);
  }
}
