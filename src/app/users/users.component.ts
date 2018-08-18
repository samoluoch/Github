import { Component, OnInit } from '@angular/core';
import {Repository} from '../repository';
import {HttpClient} from '@angular/common/http';
import { Users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [HttpClient],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  gituser: Repository;
  samsoluoch: Users;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    interface ApiResponse {
      avatar_url;
      login;
      public_repos;
      html_url;
  }
  this.http.get<ApiResponse>("https://api.github.com/users/samsoluoch?access_token=698c4dedb5ca335cf05a7b84facdf3e811e45237").subscribe(information =>{
    console.log(information);
        this.gituser = new Repository(information.avatar_url, information.login, information.public_repos, information.html_url);
      });

    }
    }
