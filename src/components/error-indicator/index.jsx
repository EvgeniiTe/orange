import React from 'react';
import Alert from 'react-bootstrap/Alert';

export const ErrorIndicator = ({ error }) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        {error.toString()}
      </p>
    </Alert>
  );
};
