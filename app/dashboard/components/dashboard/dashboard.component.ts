import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';

import { Release } from './../../models/release';
import * as fromRoot from '../../reducers/index';
import * as release from '../../actions/release';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnDestroy {
  releases$: Observable<Release[]>;
  selectedRelease$: Observable<Release>;
  actionsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>
    ) {
      this.releases$ = store.select(fromRoot.getAllReleases);
      this.selectedRelease$ = store.select(fromRoot.getSelectedRelease);

      this.actionsSubscription = this.route.params
        .select<string>('id')
        .map(id => new release.SelectAction(id))
        .subscribe(store);
    }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}