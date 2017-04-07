import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [VolunteerService]
})
export class AdminComponent implements OnInit {

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
  }

}
