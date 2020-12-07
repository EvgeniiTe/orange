export const updateAcc = (state, action) => {
  if (state === undefined) {
    return {
      reposList: [],
      loading: false,
      error: null,
    };
  }

  if (state.accSelected === undefined) {
    return {
      reposList: [],
      loading: false,
      error: null,
    };
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
      return state.accSelected;
  }
};
