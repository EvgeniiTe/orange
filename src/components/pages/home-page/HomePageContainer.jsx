import React, { useEffect } from 'react';
import { Loader } from '../../loader';
import { ErrorIndicator } from '../../error-indicator';
import { HomePageRender } from './HomePageRender';

export const HomePageContainer = ({
  history,
  makeAction: getRandomAccs,
  data: accList,
  loading,
  error
}) => {
  useEffect(() => {
    getRandomAccs(3);
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
