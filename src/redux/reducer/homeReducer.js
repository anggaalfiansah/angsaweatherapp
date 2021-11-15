/* eslint-disable prettier/prettier */
const initialState = {
  listCuaca: [],
  loadingCuaca: false,
  messageCuaca: '',
  listPeringatan: [],
  loadingPeringatan: false,
  messagePeringatan: '',
  listCitra: [],
  loadingCitra: false,
  messageCitra: '',
  gempaTerkini: null,
  loadingGempaTerkini: false,
  messageGempaTerkini: '',
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
    case 'REQUEST_PROCESSING_DATA_CITRA':
      return {
        ...state,
        loadingCitra: true,
      };
    case 'PROCESSING_DATA_CITRA_SUCCESS':
      return {
        ...state,
        loadingCitra: false,
        listCitra: action.data,
      };
    case 'PROCESSING_DATA_CITRA_FAIL':
      return {
        ...state,
        loadingCitra: false,
        listCitra: [],
        messageCitra: action.message,
      };
    case 'REQUEST_PROCESSING_DATA_GEMPA_TERKINI':
      return {
        ...state,
        loadingGempaTerkini: true,
      };
    case 'PROCESSING_DATA_GEMPA_TERKINI_SUCCESS':
      return {
        ...state,
        loadingGempaTerkini: false,
        gempaTerkini: action.data,
      };
    case 'PROCESSING_DATA_GEMPA_TERKINI_FAIL':
      return {
        ...state,
        loadingGempaTerkini: false,
        gempaTerkini: [],
        messageGempaTerkini: action.message,
      };

    default:
      return state;
  }
};

export default homeReducer;
