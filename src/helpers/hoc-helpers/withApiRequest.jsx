import React from 'react';

import { ServiceConsumer } from '../service-context';

export const withApiRequest = () => (Wrapped) => {
  return (props) => {
    return (
      <ServiceConsumer>
        {(serviceFunctions) => {
          return <Wrapped {...props} serviceFunctions={serviceFunctions} />;
        }}
      </ServiceConsumer>
    );
  };
};
