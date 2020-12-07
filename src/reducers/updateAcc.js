const initialState = {
  reposList: [],
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
        reposList: [],
        loading: true,
        error: null,
      };
    case 'FETCH_ACC_SUCCESS':
      return {
        reposList: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_ACC_FAILURE':
      return {
        reposList: [],
        loading: false,
        error: action.payload,
      };

    default:
      return initialState;
  }
};
