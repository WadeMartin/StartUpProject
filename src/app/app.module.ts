import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { startUpProfileComponent } from './startUpProfile/startUpProfile.component';
import { userProfileEditComponent } from './userProfileEdit/userProfileEdit.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileForIndividualComponent } from './profileForIndividual/profileForIndividual.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    userProfileEditComponent,
    ProfileForIndividualComponent,
    startUpProfileComponent,
    SignupComponent,
    LandingComponent,
    SearchComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    FlexLayoutModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
