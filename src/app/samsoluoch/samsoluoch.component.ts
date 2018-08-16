import { Component, OnInit } from '@angular/core';
import {Samsoluoch} from '../github';


@Component({
  selector: 'app-samsoluoch',
  templateUrl: './samsoluoch.component.html',
  styleUrls: ['./samsoluoch.component.css']
})
export class SamsoluochComponent implements OnInit {

  Samsoluoch = [
    new Samsoluoch (1, 'Sam Oluoch', 'Anitas Kitchen'),
    new Samsoluoch (2, 'Sam', 'Quotes'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
