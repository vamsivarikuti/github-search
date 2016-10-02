import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

@Injectable()
export class BaseService {
  protected apiUrl: string;

  constructor(private http: Http) {
    this.apiUrl = 'https://api.github.com';
  }

  get(url: string, options?: RequestOptionsArgs) {
    url = this.apiUrl + url;

    let tempUrl = `${url}?${options.search.toString()}`;

    let data = localStorage[tempUrl];
    if (data) {
      return Observable.of(JSON.parse(data));
    }

    return this.http
      .get(url, options)
      .map(res => {
        let json = res.json();
        localStorage[res.url] = JSON.stringify(json);
        return json;
      });
  }

}
