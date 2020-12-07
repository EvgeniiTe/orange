import React from 'react';
import { Spinner } from 'react-bootstrap';
import * as S from './styled';

export const Loader = () => {
  return (
    <S.Center>
      <Spinner animation="border" role="status" variant="info" />
    </S.Center>
  );
};
