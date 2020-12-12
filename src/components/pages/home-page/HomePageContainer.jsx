import React, { useEffect } from 'react';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Loader } from '../../loader';
import { ErrorIndicator } from '../../error-indicator';
// import { getRandomAccs } from '../../../actions';
import { HomePageRender } from './HomePageRender';

// const useCustomStoreWorker = (service) => {
//   const accList = useSelector((state) => state.accList, shallowEqual);
//   const { list, loading, error } = accList;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getRandomAccs(service)(2));
//   }, []);

//   return ({ list, loading, error });
// };

export const HomePageContainer = ({
  history,
  makeAction: getRandomAccs,
  data: accList,
  loading,
  error
}) => {
  useEffect(() => {
    getRandomAccs(2);
  }, []);

  const handleSelectItem = (login) => {
    history.push(`/${login}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return <HomePageRender list={accList} handleSelectItem={handleSelectItem} />;
};
