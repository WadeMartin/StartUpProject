import {User} from './user.model';

export class Rating {
    public ratingInt: number;
    public comment: string;
    public rater: User;
    public dateCreated: Date;
}
