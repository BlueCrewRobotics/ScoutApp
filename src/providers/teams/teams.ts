import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamsProvider {

  url;

  constructor(public http: Http) {
    this.url = 'http://bluecrew6153.org/scout/results.json';
  }

  getTeams() {
    return this.http.get(this.url).map(
      res => res.json()
    );
  }

}
