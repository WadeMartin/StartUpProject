import {Component, Inject, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from '../models/user.model';
import {RatingBreakdown} from '../models/rating-breakdown.model';
import {UserService} from '../Services/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profileForIndividual.component.html',
    styleUrls: ['./profileForIndividual.component.scss']
})

export class ProfileForIndividualComponent implements OnInit {
    public user;
    public avgRating: number;
    public breakdown: RatingBreakdown;

    constructor(private userService: UserService) {
        console.log('const hit');
        this.userService.getUserDetails().subscribe(
            (resp: Response) => {
                this.user = resp;
                console.log(this.user);
                this.avgRating = this.userService.getUserAverageRating(this.user);
                this.breakdown = new RatingBreakdown();
                this.breakdown.SetCountsAndPercentages(this.user);
            }
        );
    }

    ngOnInit() {
        console.log('ngInit hit');
    }
}
