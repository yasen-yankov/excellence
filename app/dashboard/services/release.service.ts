import { Observable } from 'rxjs/Observable';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Release } from './../models/release';

@Injectable()
export class ReleaseService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private releasesUrl = 'app/releases';

  constructor(private http: Http) { }

  getReleases(): Observable<Release[]> {
    return this.http.get(this.releasesUrl)
               .map(response => response.json().data as Release[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}