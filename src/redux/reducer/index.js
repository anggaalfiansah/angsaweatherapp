/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import perkiraanCuacaIndonesiaReducer from './perkiraanCuacaIndonesia';

export default combineReducers({
  home: homeReducer,
  perkiraanCuacaIndonesia: perkiraanCuacaIndonesiaReducer,
});
