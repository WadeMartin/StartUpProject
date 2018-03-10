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
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeModule } from './home/home.module';
import {HttpModule} from '@angular/http';
import {UserService} from './services/user.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { IndividualProfileComponent } from './individual-profile/individual-profile.component';
import { StartupProfileComponent } from './startup-profile/startup-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {CompanyService} from './services/company.service';
import {SubscriptionService} from './services/subscription.service';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    IndividualProfileComponent,
    StartupProfileComponent,
    SignupComponent,
    LandingComponent,
    SearchComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    IndividualProfileComponent,
    StartupProfileComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    FlexLayoutModule,
    HomeModule,
    HttpModule
  ],
  providers: [
      UserService,
      CompanyService,
      SubscriptionService,
      { provide: 'BASE_URL', useFactory: getBaseUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return 'http://localhost:63830'
}
