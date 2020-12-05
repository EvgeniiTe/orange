// accList
export const accListRequested = () => {
  return { type: 'FETCH_LIST_REQUEST' };
};

export const accListLoaded = (accList) => {
  return {
    type: 'FETCH_LIST_SUCCESS',
    payload: accList,
  };
};

export const accListError = (error) => {
  return {
    type: 'FETCH_LIST_FAILURE',
    payload: error,
  };
};

// accSelected
export const accRequested = () => {
  return { type: 'FETCH_ACC_REQUEST' };
};

export const accLoaded = (acc) => {
  return {
    type: 'FETCH_ACC_SUCCESS',
    payload: acc,
  };
};

export const accError = (error) => {
  return {
    type: 'FETCH_ACC_FAILURE',
    payload: error,
  };
};
