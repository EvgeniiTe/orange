export const updateRepo = (state, action) => {
  if (state === undefined) {
    return {
      repoInfo: null,
      loading: false,
      error: null,
    };
  }

  if (state.repoSelected === undefined) {
    return {
      repoInfo: null,
      loading: false,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_REPO_REQUEST':
      return {
        repoInfo: null,
        loading: true,
        error: null,
      };
    case 'FETCH_REPO_SUCCESS':
      return {
        repoInfo: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_REPO_FAILURE':
      return {
        repoInfo: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state.repoSelected;
  }
};
