import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css'],
  providers: [VolunteerService]
})
export class VolunteersComponent implements OnInit {
  volunteers: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private volunteerService: VolunteerService) { }

  ngOnInit() {
    this.volunteers = this.volunteerService.getVolunteers();
  }

  goToDetailPage(clickedVolunteer) {
    this.router.navigate(['volunteers', clickedVolunteer.$key]);
  }

}
