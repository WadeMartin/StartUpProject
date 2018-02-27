import {User} from './user.model';

export class RatingBreakdown {
    public fiveStarCount = 0;
    public fourStarCount = 0;
    public threeStarCount = 0;
    public twoStarCount = 0;
    public oneStarCount = 0;

    public fiveStarPercentage: number;
    public fourStarPercentage: number;
    public threeStarPercentage: number;
    public twoStarPercentage: number;
    public oneStarPercentage: number;

    constructor() { }

    SetCountsAndPercentages(user: User) {
        const ratingCount = user.ratings.length;

        this.fiveStarCount = user.ratings.filter(x => x.ratingInt === 5).length;
        this.fiveStarPercentage = (this.fiveStarCount / ratingCount) * 100;
    }
}
