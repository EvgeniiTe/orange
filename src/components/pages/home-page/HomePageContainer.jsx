import React, { useEffect } from 'react';
import { Loader } from '../../loader';
import { ErrorIndicator } from '../../error-indicator';

import { HomePageRender } from './HomePageRender';

export const HomePageContainer = ({ history, getNthRandomAcc, list, loading, error }) => {
  useEffect(() => {
    getNthRandomAcc(1);
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

  return <HomePageRender list={list} handleSelectItem={handleSelectItem} />;
};
