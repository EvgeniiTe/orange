import React from 'react';
import { withRouter } from 'react-router-dom';
import * as S from './styled';

const AccPageTemplate = ({ history, match }) => {
  return (
    <main>
      <S.MainContainer>
        HO
      </S.MainContainer>
    </main>
  );
};

export const AccPage = withRouter(AccPageTemplate);
