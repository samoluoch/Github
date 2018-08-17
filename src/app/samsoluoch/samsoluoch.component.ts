import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-samsoluoch',
  templateUrl: './samsoluoch.component.html',
  providers: [HttpClient],
  styleUrls: ['./samsoluoch.component.css']
})
export class SamsoluochComponent implements OnInit {
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
        this.samsoluoch = new Users(information.avatar_url, information.login, information.public_repos, information.html_url);
  });

}
}
