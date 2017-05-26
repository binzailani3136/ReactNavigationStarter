import { combineReducers } from 'redux';
import _ from 'lodash';
import * as types from '../actions/actionTypes';
import { users, login } from './users';
import { nav } from './nav';

const appReducer = combineReducers({
  users,
  login,
  nav,
});

// const rootReducer = (state, action) => appReducer(state, action);

export default appReducer;
