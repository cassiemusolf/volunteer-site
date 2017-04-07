import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'volunteers',
    component: VolunteersComponent
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'volunteers/:id',
    component: VolunteerDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
