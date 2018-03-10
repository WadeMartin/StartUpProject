import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../services/company.service';
import {Company} from '../models/company.model';

@Component({
  selector: 'app-startup-profile',
  templateUrl: './startup-profile.component.html',
  styleUrls: ['./startup-profile.component.scss']
})
export class StartupProfileComponent implements OnInit {
  company: Company;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    // this.company = this.companyService.getCompanies()[0];
      this.company = new Company();
  }

}
