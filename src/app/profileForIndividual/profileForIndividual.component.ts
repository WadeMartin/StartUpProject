import {Component, Inject, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../models/user.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profileForIndividual.component.html',
    styleUrls: ['./profileForIndividual.component.scss']
})

export class ProfileForIndividualComponent implements OnInit {
    public user: User;
    public avgRating: number;

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + '/api/values').subscribe(result => {
            this.user = result.json() as User;
            this.avgRating = this.GetAverageRating();
            console.log(this.user);
        }, error => console.error(error));
    }

    ngOnInit() {}

    GetAverageRating() {
        let avg: number;
        let total = 0;

        for (let ratingItem of this.user.ratings){
            total += ratingItem.ratingInt;
        }

        avg = total / this.user.ratings.length;
        return avg;
    }
}
