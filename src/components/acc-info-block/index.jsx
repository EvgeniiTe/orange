import React from 'react';
import Image from 'react-bootstrap/Image';
import * as S from './styled';

export const AccInfoBlock = ({ login, ownerUrl, avatarUrl }) => {
  return (
    <S.AccInfoBlock xs={1} md={3}>
      <S.StyledCol>{login}</S.StyledCol>
      <S.StyledCol><a href={ownerUrl}>Link to acc on Github</a></S.StyledCol>
      <S.StyledCol><Image src={avatarUrl} roundedCircle style={{ width: '5rem' }} /></S.StyledCol>
    </S.AccInfoBlock>
  );
};
