import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { RantRave } from '../rant-rave.model';
import { RantService } from '../rant.service';

@Component({
  selector: 'app-rant-details',
  templateUrl: './rant-details.component.html',
  styleUrls: ['./rant-details.component.css'],
  providers: [RantService]
})
export class RantDetailsComponent implements OnInit {

  rantId: number;
  rantToDisplay: RantRave;

  constructor(private route: ActivatedRoute, private location: Location, private rantService: RantService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.rantId = parseInt(urlParameters['id']);
    });

    // this.rantToDisplay = this.rantService.getRantsById(this.rantId);

  }

}
