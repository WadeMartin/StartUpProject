import {Rating} from './rating.model';

export class User {
    public firstName: string;
    public lastName: string;
    public title: string;
    public description: string;
    public currentEmployer: string;
    public profilePic: string;
    public cvDocument: string;
    public expertise: string[];
    public ratings: Rating[];
}
