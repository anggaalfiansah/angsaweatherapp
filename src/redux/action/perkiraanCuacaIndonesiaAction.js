/* eslint-disable prettier/prettier */
export const processRawDataPerkiraanCuacaIndonesia = raw_data => {
  return {
    type: 'REQUEST_PROCESSING_PERKIRAAN_CUACA_INDONESIA',
    payload: raw_data,
  };
};
