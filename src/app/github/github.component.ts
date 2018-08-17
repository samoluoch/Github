import { Component, OnInit } from '@angular/core';
import {Repositories} from '../repository';
import { GithubService } from '../repository/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers: [GithubService],
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  Repositories: Repository;

  constructor() { }

  ngOnInit() {
  }

}
