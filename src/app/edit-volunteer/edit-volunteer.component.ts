import { Component, Input, OnInit } from '@angular/core';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.css'],
  providers: [VolunteerService]
})
export class EditVolunteerComponent implements OnInit {
@Input() selectedVolunteer;


  constructor(private volunteerService: VolunteerService) { }

  ngOnInit() {
  }

  // editVolunteer(clickedVolunteer) {
  //   this.selectedVolunteer != null;
  // }

  beginUpdatingVolunteer(volunteerToUpdate){
    this.volunteerService.updateVolunteer(volunteerToUpdate);
  }

  beginDeletingVolunteer(volunteerToDelete){
  if(confirm("Are you sure you want to delete this volunteer?")){
    this.volunteerService.deleteVolunteer(volunteerToDelete);
  }
}
}
