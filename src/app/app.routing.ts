import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {StartupProfileComponent} from './startup-profile/startup-profile.component';
import {IndividualProfileComponent} from './individual-profile/individual-profile.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
    { path: 'home',                 component: HomeComponent },
    { path: 'start-up',             component: StartupProfileComponent },
    { path: 'user-profile-edit',    component: UserProfileComponent },
    { path: 'profile',              component: ProfileComponent },
    { path: 'user-profile',         component: IndividualProfileComponent },
    { path: 'search',               component: SearchComponent },
    { path: 'signup',               component: SignupComponent },
    { path: 'signin',               component: SignInComponent },
    { path: 'landing',              component: LandingComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
