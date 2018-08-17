import { Component, OnInit } from '@angular/core';
import {Users} from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users = [
    new Users (1, 'samsoluoch'),
    new Users (2, 'samsoluoch'),
    new Users (3, 'samsoluoch'),
    new Users (4, 'samsoluoch'),
    new Users (5, 'samsoluoch'),
  ];

  toggleDetails(index) {
    this.Users[index].showDetails = !this.Users[index].showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
