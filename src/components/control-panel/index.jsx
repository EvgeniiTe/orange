import React from 'react';
import Button from 'react-bootstrap/Button';
import * as S from './styled';

export const ControlPanel = ({ onlyHome, ownerLogin }) => {
  const ownerAccPage = `/${ownerLogin}`;
  if (onlyHome) {
    return (
      <S.ControlPanel>
        <Button variant="primary"><S.StyledLink to="/">HOME</S.StyledLink></Button>
      </S.ControlPanel>
    );
  }
  return (
    <S.ControlPanel>
      <Button variant="primary"><S.StyledLink to="/">HOME</S.StyledLink></Button>
      <Button variant="primary"><S.StyledLink to={ownerAccPage}>REPOS LIST</S.StyledLink></Button>
    </S.ControlPanel>
  );
};
