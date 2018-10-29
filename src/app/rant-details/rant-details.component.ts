import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { RantRave } from '../rant-rave.model';
@Component({
  selector: 'app-rant-details',
  templateUrl: './rant-details.component.html',
  styleUrls: ['./rant-details.component.css']
})
export class RantDetailsComponent implements OnInit {

  rantId: number = null;
  
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.rantId = parseInt(urlParameters['id']);
    });  
  }

}
