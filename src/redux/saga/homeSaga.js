/* eslint-disable prettier/prettier */
import {
  homeDataRawProcessCuaca,
  homeDataRawProcessPeringatan,
  homeDataRawProcessCitra,
} from '../../helper';
import {put, takeLatest} from '@redux-saga/core/effects';

function* processHomeDataCuaca(action) {
  try {
    const data = yield homeDataRawProcessCuaca(action.payload);
    if (data) {
      yield put({type: 'PROCESSING_DATA_CUACA_SUCCESS', data: data});
    }
  } catch (error) {
    yield put({
      type: 'PROCESSING_DATA_CUACA_FAIL',
      message: 'GAGAL MENDAPATKAN DATA CUACA',
    });
  }
}
function* processHomeDataPeringatan(action) {
  try {
    const data = yield homeDataRawProcessPeringatan(action.payload);
    if (data) {
      yield put({type: 'PROCESSING_DATA_PERINGATAN_SUCCESS', data: data});
    }
  } catch (error) {
    yield put({
      type: 'PROCESSING_DATA_PERINGATAN_FAIL',
      message: 'GAGAL MENDAPATKAN DATA PERINGATAN',
    });
  }
}
function* processHomeDataCitra(action) {
  try {
    const data = yield homeDataRawProcessCitra(action.payload);
    if (data) {
      yield put({type: 'PROCESSING_DATA_CITRA_SUCCESS', data: data});
    }
  } catch (error) {
    yield put({
      type: 'PROCESSING_DATA_CITRA_FAIL',
      message: 'GAGAL MENDAPATKAN DATA CITRA',
    });
  }
}

export default function* homeSaga() {
  yield takeLatest('REQUEST_PROCESSING_DATA_CUACA', processHomeDataCuaca);
  yield takeLatest('REQUEST_PROCESSING_DATA_PERINGATAN',processHomeDataPeringatan);
  yield takeLatest('REQUEST_PROCESSING_DATA_CITRA',processHomeDataCitra);
}
