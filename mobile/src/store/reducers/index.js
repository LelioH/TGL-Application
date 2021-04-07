import { combineReducers } from 'redux';
import auth from './auth';
import bets from './bets';
import types from './types';

const rootReducer = combineReducers({
  auth,
  bets,
  types,
});

export default rootReducer;
