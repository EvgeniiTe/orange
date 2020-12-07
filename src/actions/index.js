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

export const getRandomAccs = (serviceFunctions) => (quantity) => async (dispatch) => {
  dispatch(accListRequested());
  try {
    const data = await serviceFunctions.getNthRandomAcc(quantity);
    dispatch(accListLoaded(data));
  } catch (error) {
    dispatch(accListError(error));
  }
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

export const getAccPublicRepos = (serviceFunctions) => (username) => async (dispatch) => {
  dispatch(accRequested());
  try {
    const data = await serviceFunctions.getAccRepos(username);
    dispatch(accLoaded(data));
  } catch (error) {
    dispatch(accError(error));
  }
};

// repoSelected
export const repoRequested = () => {
  return { type: 'FETCH_REPO_REQUEST' };
};

export const repoLoaded = (repo) => {
  return {
    type: 'FETCH_REPO_SUCCESS',
    payload: repo,
  };
};

export const repoError = (error) => {
  return {
    type: 'FETCH_REPO_FAILURE',
    payload: error,
  };
};

export const getRepoInfoAndReadmeUrl = (serviceFunctions) => (usernameRepo) => async (dispatch) => {
  dispatch(repoRequested());
  try {
    const data = await serviceFunctions.getRepoInfoAndReadme(usernameRepo);
    dispatch(repoLoaded(data));
  } catch (error) {
    dispatch(repoError(error));
  }
};
