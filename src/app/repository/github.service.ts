import { Injectable } from '@angular/core';
import {Repository} from '../repository';
import {Users} from '../users';

@Injectable()
export class GithubService {
  getRepositories() {
    return Repository;
  }

  constructor() { }
}

