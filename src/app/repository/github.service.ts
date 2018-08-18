import { Injectable } from '@angular/core';
import {Repository} from '../repository';

@Injectable()
export class GithubService {
  getRepositories() {
    return Repository;
  }

  constructor() { }
}
