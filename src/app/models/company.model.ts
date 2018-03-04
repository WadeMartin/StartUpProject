import {Subscription} from './subscription.model';
import {Rating} from './rating.model';

export class Company {
    public companyName: string;
    public currentSubscription: Subscription;
    public field: string[];
    public location: string;
    public createdYear: Date;
    public logoLoc: string;
    public photos: string[];
    public videos: string[];
    public ratings: Rating[];
    public clicks: number;
    public followers: number;
    public messages: number;
    public mediaLinks: string[];
    public websiteUrl: string;
    public members: string[];
}
