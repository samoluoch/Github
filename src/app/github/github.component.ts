import { Component, OnInit } from '@angular/core';
import {Repositories} from '../repository';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  Repositories: Repository;

  constructor() { }

  ngOnInit() {
  }

}
