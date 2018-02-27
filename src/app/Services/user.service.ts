import {User} from '../models/user.model';
import {Http, Response} from '@angular/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    public user: User;

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
    }

    getUserDetails() {
        return this.http.get(this.baseUrl + '/api/values').map((res: Response) => res.json()).catch(err => {
            return Observable.throw('no');
        })
    }

    getUserAverageRating(user: User) {
        let avg: number;
        let total = 0;

        if (user) {
            for (const ratingItem of user.ratings){
                total += ratingItem.ratingInt;
            }

            avg = total / user.ratings.length;
        }
        return avg;
    }
}
