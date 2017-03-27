import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AppService {    
    
    constructor(private http: Http) {}

    fetchData(nameUser){
        return this.http.get('https://api.github.com/users/' + nameUser)
            .map(response => response.json());
    }

}