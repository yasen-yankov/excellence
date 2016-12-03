import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Release } from './../release';

@Injectable()
export class ReleaseService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private releasesUrl = 'app/releases';

  constructor(private http: Http) { }

  getReleases(): Promise<Release[]> {
    return this.http.get(this.releasesUrl)
               .toPromise()
               .then(response => response.json().data as Release[])
               .catch(this.handleError);
  }

  getRelease(id: string): Promise<Release> {
    return this.getReleases()
               .then(releases => releases.find(release => release.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}