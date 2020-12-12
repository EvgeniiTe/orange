import React from 'react';
import { useStoreOnceAfterMount } from '../hooks';

export const withUseStoreOnceAfterMount = (storeKey, action) => (Wrapped) => {
  return (props) => {
    const { serviceFunctions } = props;
    const {
      data,
      loading,
      error,
      makeAction
    } = useStoreOnceAfterMount(serviceFunctions, storeKey, action);
    return (
      <Wrapped {...props} data={data} loading={loading} error={error} makeAction={makeAction} />
    );
  };
};
