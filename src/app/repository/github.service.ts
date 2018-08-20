import { Injectable } from '@angular/core';
import {Repository} from '../repository';
import {Users} from '../users';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GithubService {
  getUsers() {
    return Users;
  }
}

