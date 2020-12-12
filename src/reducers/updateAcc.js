const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const updateAcc = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  if (state.accSelected === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'FETCH_ACC_REQUEST':
      return {
        data: [],
        loading: true,
        error: null,
      };
    case 'FETCH_ACC_SUCCESS':
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_ACC_FAILURE':
      return {
        data: [],
        loading: false,
        error: action.payload,
      };

    default:
      return initialState;
  }
};
