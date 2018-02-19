import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './userProfileEdit.component.html',
    styleUrls: ['./userProfileEdit.scss']
})
export class userProfileEditComponent implements OnInit {
    test : Date = new Date();

    constructor() { }

    ngOnInit() {}
}
