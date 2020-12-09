import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import * as S from './styled';

export const ControlPanel = ({ onlyHome, ownerLogin }) => {
  const ownerAccPage = `/${ownerLogin}`;
  if (onlyHome) {
    return (
      <S.ControlPanel>
        <Link to="/"><Button variant="primary">HOME</Button></Link>
      </S.ControlPanel>
    );
  }
  return (
    <S.ControlPanel>
      <Link to="/"><Button variant="primary">HOME</Button></Link>
      <Link to={ownerAccPage}><Button variant="primary">REPOS LIST</Button></Link>
    </S.ControlPanel>
  );
};
