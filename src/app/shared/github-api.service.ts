import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class GithubApiService extends BaseService {

  constructor(http: Http) {
    super(http);
    localStorage.clear();
  }

  searchRepositories(query) {
    let params = new URLSearchParams();

    params.set('q', query.query);
    params.set('order', query.order);
    params.set('per_page', '25');
    if (query.sort) {
      params.set('sort', query.sort);
    }

    return this.get('/search/repositories', {search: params});
  }

}
