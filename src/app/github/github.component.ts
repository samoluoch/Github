import { Component, OnInit } from '@angular/core';
import {Samsoluoch} from '../github';
import {Github} from '../github';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  Samsoluoch = [
    new Samsoluoch (1, 'Sam Oluoch', 'Anitas Kitchen'),
    new Samsoluoch (2, 'Sam', 'Quotes'),
  ];

  // constructor() { }

  ngOnInit() {
  }

}
