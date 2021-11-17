/* eslint-disable prettier/prettier */
import {all} from 'redux-saga/effects';
import homeSaga from './homeSaga';
import perkiraanCuacaIndonesiaSaga from './perkiraanCuacaIndonesiaSaga';

export default function* rootSaga() {
  yield all([homeSaga(), perkiraanCuacaIndonesiaSaga()]);
}
