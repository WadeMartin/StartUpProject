import {Company} from '../models/company.model';

export class CompanyService {
    private companies: Company[];

    constructor() {}

    getCompanies() {
        return this.companies;
    }
}
