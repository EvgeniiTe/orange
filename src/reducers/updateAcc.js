export const updateAcc = (state, action) => {
  if (state === undefined) {
    return {
      selectedAcc: null,
      loading: false,
      error: null,
    };
  }

  if (state.accSelected === undefined) {
    return {
      selectedAcc: null,
      loading: false,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_ACC_REQUEST':
      return {
        selectedAcc: null,
        loading: true,
        error: null,
      };
    case 'FETCH_ACC_SUCCESS':
      return {
        selectedAcc: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_ACC_FAILURE':
      return {
        selectedAcc: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state.accSelected;
  }
};
