export const updateAccList = (state, action) => {
  if (state === undefined) {
    return {
      list: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case 'FETCH_LIST_REQUEST':
      return {
        list: [],
        loading: true,
        error: null,
      };
    case 'FETCH_LIST_SUCCESS':
      return {
        list: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_LIST_FAILURE':
      return {
        list: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.accList;
  }
};
