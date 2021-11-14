/* eslint-disable prettier/prettier */
export const processRawDataHomeCuaca = raw_data => {
  return {type: 'REQUEST_PROCESSING_DATA_CUACA', payload: raw_data};
};
export const processRawDataHomePeringatan = raw_data => {
  return {type: 'REQUEST_PROCESSING_DATA_PERINGATAN', payload: raw_data};
};
