import {Subscription} from '../models/subscription.model';

export class SubscriptionService{
    subscriptions: Subscription[] = [
        new Subscription('Free', 'test', 0),
        new Subscription('Early Stage', 'test', 5),
        new Subscription('Growing', 'test', 20)
    ];

    getSubscriptions() {
        return this.subscriptions;
    }
}
