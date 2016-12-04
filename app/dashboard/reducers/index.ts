import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { Release } from '../models/release';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromReleases from './release';

export interface State {
  releases: fromReleases.State;
}

const reducers = {
  releases: fromReleases.reducer
};

export function reducer(state: any, action: any) {
    return compose(storeFreeze, combineReducers)(reducers)(state, action);
}

export const getReleasesState = (state: State) => state.releases;
export const getReleaseEntities = createSelector(getReleasesState, fromReleases.getEntities);
export const getAllReleases = createSelector(getReleasesState, fromReleases.getAll);
export const getReleaseIds = createSelector(getReleasesState, fromReleases.getIds);
export const getSelectedReleaseId = createSelector(getReleasesState, fromReleases.getSelectedId);
export const getSelectedRelease = createSelector(getReleasesState, fromReleases.getSelected);