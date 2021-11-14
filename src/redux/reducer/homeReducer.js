/* eslint-disable prettier/prettier */
const initialState = {
  listCuaca: [],
  loadingCuaca: false,
  messageCuaca: '',
  listPeringatan: [],
  loadingPeringatan: false,
  messagePeringatan: '',
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_PROCESSING_DATA_CUACA':
      return {
        ...state,
        loadingCuaca: true,
      };
    case 'PROCESSING_DATA_CUACA_SUCCESS':
      return {
        ...state,
        loadingCuaca: false,
        listCuaca: action.data,
      };
    case 'PROCESSING_DATA_CUACA_FAIL':
      return {
        ...state,
        loadingCuaca: false,
        listCuaca: [],
        messageCuaca: action.message,
      };
    case 'REQUEST_PROCESSING_DATA_PERINGATAN':
      return {
        ...state,
        loadingPeringatan: true,
      };
    case 'PROCESSING_DATA_PERINGATAN_SUCCESS':
      return {
        ...state,
        loadingPeringatan: false,
        listPeringatan: action.data,
      };
    case 'PROCESSING_DATA_PERINGATAN_FAIL':
      return {
        ...state,
        loadingPeringatan: false,
        listPeringatan: [],
        messagePeringatan: action.message,
      };
    default:
      return state;
  }
};

export default homeReducer;
