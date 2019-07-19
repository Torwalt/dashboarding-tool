import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../models/User"

@Component({
    selector: 'app-user-name-display',
    templateUrl: './user-name-display.component.html',
    styleUrls: ['./user-name-display.component.scss']
})
export class UserNameDisplayComponent implements OnInit {

    private user: User = {
        Username: '',
        password: '',
    }

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.user.Username = this.userService.getUsername();

    }

}
