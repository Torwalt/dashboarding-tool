import { Injectable } from '@angular/core';
import { Data } from "../data/exampleData";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userData: Data;

    constructor() { }
 
    getUsername(): string{
        this.userData = new Data();
        return this.userData.userData[3].Username;
    }
}
