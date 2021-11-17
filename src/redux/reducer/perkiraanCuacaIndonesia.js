/* eslint-disable prettier/prettier */
const initialState = {
  listPerkiraanCuacaIndonesia: [],
  loadingPerkiraanCuacaIndonesia: false,
  messagePerkiraanCuacaIndonesia: '',
};

const perkiraanCuacaIndonesiaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_PROCESSING_PERKIRAAN_CUACA_INDONESIA':
      return {
        ...state,
        loadingPerkiraanCuacaIndonesia: false,
      };
    case 'PROCESSING_PERKIRAAN_CUACA_INDONESIA_SUCCESS':
      return {
        ...state,
        listPerkiraanCuacaIndonesia: action.data,
      };
    case 'PROCESSING_PERKIRAAN_CUACA_INDONESIA_FAIL':
      return {
        ...state,
        messagePerkiraanCuacaIndonesia: action.message,
      };

    default:
      return state;
  }
};

export default perkiraanCuacaIndonesiaReducer;
