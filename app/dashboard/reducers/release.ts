import { createSelector } from 'reselect';
import { Release } from '../models/release';
import * as release from '../actions/release';

export interface State {
  ids: string[];
  entities: { [id: string]: Release };
  selectedReleaseId: string | null;
};

const initialState: State = {
  ids: [],
  entities: {},
  selectedReleaseId: null,
};

export function reducer(state = initialState, action: release.Actions): State {
    switch (action.type) {
        case release.ActionTypes.LOAD_SUCCESS: {
            const releases = action.payload;
            const newReleases = releases.filter(release => !state.entities[release.id]);

            const newReleaseIds = newReleases.map(release => release.id);
            const newReleaseEntities = newReleases.reduce((entities: { [id: string]: Release }, release: Release) => {
                return Object.assign(entities, {
                    [release.id]: release
                });
            }, {});

            return {
                ids: [ ...state.ids, ...newReleaseIds ],
                entities: Object.assign({}, state.entities, newReleaseEntities),
                selectedReleaseId: state.selectedReleaseId
            };
        }

        case release.ActionTypes.SELECT: {
            return {
                ids: state.ids,
                entities: state.entities,
                selectedReleaseId: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedId = (state: State) => state.selectedReleaseId;

export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
  return entities[selectedId];
});

export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});