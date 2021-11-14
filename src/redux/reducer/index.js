/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import homeReducer from './homeReducer';

export default combineReducers({
  home: homeReducer,
});
