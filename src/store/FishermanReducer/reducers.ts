import { Reducer } from 'redux';
import { AppState } from '../../types/AppState';
import { GetFishermanActions, FishermanActionTypes } from './actions';

const initialState = {
  fishermenList: []
};

export const FishermanDataReducer = (
  state = initialState,
  action: FishermanActionTypes
) => {
  switch (action.type) {
    case GetFishermanActions.SAVE_FISHERMAN_DATA:
      return { ...state, fishermenList: action.data };
    default:
      return state;
  }
};

export const getFishermanData = (state: AppState) => state.fishermanData;
