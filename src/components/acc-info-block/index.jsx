import React from 'react';
import Image from 'react-bootstrap/Image';
import * as S from './styled';

export const AccInfoBlock = ({ login, ownerUrl, avatarUrl }) => {
  return (
    <S.AccInfoBlock xs={1} md={3}>
      <S.StyledColStressFont md={6}>{login}</S.StyledColStressFont>
      <S.AccCol md={3}><a href={ownerUrl}>Link to acc on Github</a></S.AccCol>
      <S.AccCol md={3}><Image src={avatarUrl} roundedCircle style={{ width: '5rem' }} /></S.AccCol>
    </S.AccInfoBlock>
  );
};
