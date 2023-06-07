import { combineReducers } from 'redux';

import { FishermanDataReducer } from './FishermanReducer/reducers';

export const rootReducer = combineReducers({
  fishermanData: FishermanDataReducer
});

export default rootReducer;
