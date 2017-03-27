import { Component, OnInit, Input } from '@angular/core';
import { AppService } from './app.service';
import { FormControl } from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ AppService ]
})

export class AppComponent implements OnInit {

    profile: Array<object>;
    username: string;

    constructor(private appService: AppService) {
        this.profile = [];
    }

    ngOnInit(): void{}

    getUserName(){
        console.log(this.username);

        this.appService.fetchData(this.username)
            .subscribe(
                (profile) => this.profile = profile,
                (error) => {
                    this.profile = [];
                    console.error('Error: ' + error)
                },
                () => console.log(this.profile)
            );
        
    }

}