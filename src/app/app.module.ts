import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditVolunteerComponent } from './edit-volunteer/edit-volunteer.component';
import { CategoriesPipe } from './categories.pipe';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    VolunteersComponent,
    WelcomeComponent,
    VolunteerDetailComponent,
    AdminComponent,
    EditVolunteerComponent,
    CategoriesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    Angular2FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
