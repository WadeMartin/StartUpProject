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

        // Five
        this.fiveStarCount = user.ratings.filter(x => x.ratingInt === 5).length;
        this.fiveStarPercentage = (this.fiveStarCount / ratingCount) * 100;

        // Four
        this.fourStarCount = user.ratings.filter(x => x.ratingInt === 4).length;
        this.fourStarPercentage = (this.fourStarCount / ratingCount) * 100;

        // Three
        this.threeStarCount = user.ratings.filter(x => x.ratingInt === 3).length;
        this.threeStarPercentage = (this.threeStarCount / ratingCount) * 100;

        // Two
        this.twoStarCount = user.ratings.filter(x => x.ratingInt === 2).length;
        this.twoStarPercentage = (this.twoStarCount / ratingCount) * 100;

        // One
        this.oneStarCount = user.ratings.filter(x => x.ratingInt === 1).length;
        this.oneStarPercentage = (this.oneStarCount / ratingCount) * 100;
    }
}
