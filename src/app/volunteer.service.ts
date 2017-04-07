import { Injectable } from '@angular/core';
import { Volunteer } from './volunteer.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class VolunteerService {
  volunteers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.volunteers = angularFire.database.list('volunteers');
  }

  getVolunteers() {
    return this.volunteers;
  }

  getVolunteerById(volunteerId: string){
    return this.angularFire.database.object('volunteers/' + volunteerId);
  }

  updateVolunteer(localUpdatedVolunteer){
    var volunteerEntryInFirebase = this.getVolunteerById(localUpdatedVolunteer.$key);
    volunteerEntryInFirebase.update({name: localUpdatedVolunteer.name,
      quote: localUpdatedVolunteer.quote,
      country: localUpdatedVolunteer.country, region: localUpdatedVolunteer.region, story: localUpdatedVolunteer.story, image: localUpdatedVolunteer.image});
    }

  }
