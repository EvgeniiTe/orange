import React from 'react';
import * as S from './styled';

export const ErrorIndicator = ({ error }) => {
  return (
    <S.ErrorIndicator>
      {error.toString()}
    </S.ErrorIndicator>
  );
};
