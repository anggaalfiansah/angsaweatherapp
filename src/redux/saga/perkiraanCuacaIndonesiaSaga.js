/* eslint-disable prettier/prettier */
import {dataRawProcessPerkiraanCuacaIndonesia} from '../../helper';
import {put, takeLatest} from '@redux-saga/core/effects';

function* perkiraanCuacaIndonesia(action) {
  try {
    const data = yield dataRawProcessPerkiraanCuacaIndonesia(action.payload);
    // if (data) {
    //   yield put({
    //     type: 'PROCESSING_PERKIRAAN_CUACA_INDONESIA_SUCCESS',
    //     data: data,
    //   });
    // }
  } catch (error) {
    yield put({
      type: 'PROCESSING_PERKIRAAN_CUACA_INDONESIA_FAIL',
      message: 'GAGAL MENDAPATKAN DATA PERKIRAAN CUACA INDONESIA',
    });
  }
}

export default function* perkiraanCuacaIndonesiaSaga() {
  yield takeLatest('REQUEST_PROCESSING_PERKIRAAN_CUACA_INDONESIA', perkiraanCuacaIndonesia);
}
