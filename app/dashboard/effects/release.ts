import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { ReleaseService } from '../services/release.service';
import * as release from '../actions/release';
import { Release } from '../models/release';

@Injectable()
export class ReleaseEffects {
    constructor(private actions$: Actions, private releaseService: ReleaseService) { }

    @Effect()
    loadReleases$: Observable<Action> = this.actions$
        .ofType(release.ActionTypes.LOAD)
        .startWith(new release.LoadAction())
        .switchMap(() => 
            this.releaseService.getReleases()
                .map((releases: Release[]) => new release.LoadSuccessAction(releases))
                .catch(error => of(new release.LoadFailAction(error)))
        );
}