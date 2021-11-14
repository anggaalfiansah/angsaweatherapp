/* eslint-disable prettier/prettier */
import {all} from 'redux-saga/effects';
import homeSaga from './homeSaga';

export default function* rootSaga() {
  yield all([homeSaga()]);
}
