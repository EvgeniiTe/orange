export const updateRepo = (state, action) => {
  if (state === undefined) {
    return {
      data: null,
      loading: false,
      error: null,
    };
  }

  if (state.repoSelected === undefined) {
    return {
      data: null,
      loading: false,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_REPO_REQUEST':
      return {
        data: null,
        loading: true,
        error: null,
      };
    case 'FETCH_REPO_SUCCESS':
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_REPO_FAILURE':
      return {
        data: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state.repoSelected;
  }
};
