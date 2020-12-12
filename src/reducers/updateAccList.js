export const updateAccList = (state, action) => {
  if (state === undefined) {
    return {
      data: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_LIST_REQUEST':
      return {
        data: [],
        loading: true,
        error: null,
      };
    case 'FETCH_LIST_SUCCESS':
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_LIST_FAILURE':
      return {
        data: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.accList;
  }
};
