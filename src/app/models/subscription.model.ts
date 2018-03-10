export class Subscription {
    public subName: string;
    public subDescription: string;
    public price: number;

    constructor(subName: string, subDescription: string, price: number) {
        this.subName = subName;
        this.subDescription = subDescription;
        this.price = price;
    }
}
