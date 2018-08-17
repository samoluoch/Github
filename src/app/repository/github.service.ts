import { Injectable } from '@angular/core';
import {Repositories} from '../repository';

@Injectable()
export class GithubService {
  getRepositories() {
    return Repositories;
  }

  constructor() { }
}
