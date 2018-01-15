import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamsProvider {

  url;

  constructor(public http: Http) {
    this.url = 'http://scout.bluecrew6153.org/api/teams.json' + '?hash_id=' + Math.random();
  }

  getTeams() {
    return this.http.get(this.url).map(
      res => res.json()
    );
  }

}
