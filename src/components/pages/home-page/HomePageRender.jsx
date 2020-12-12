import React from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Button } from 'react-bootstrap';
import * as S from '../styled';

export const HomePageRender = ({ list, handleSelectItem }) => {
  const AccList = ({ data = [], selectItem }) => {
    const items = data.map(({ id, login, html_url: url, avatar_url: avatarUrl }) => {
      return (
        <S.StyledRow key={id}>
          <S.StyledColStressFont xs={12} md={2}>{login}</S.StyledColStressFont>
          <S.StyledCol xs={12} md={6}><a href={url}>Link to acc on Github</a></S.StyledCol>
          <S.StyledCol xs={12} md={2} style={{ minHeight: '5rem' }}><Image src={avatarUrl} roundedCircle style={{ width: '5rem' }} /></S.StyledCol>
          <S.StyledCol xs={12} md={2}><Button variant="primary" onClick={() => selectItem(login)}>MORE INFO</Button></S.StyledCol>
        </S.StyledRow>
      );
    });

    return (
      <>
        { items }
      </>
    );
  };

  return (
    <S.MainContainer>
      <S.StyledHeadRow>
        <Col md={2}>ЛОГИН</Col>
        <Col md={6}>ССЫЛКА НА АККАУНТ</Col>
        <Col md={2}>АВАТАР</Col>
      </S.StyledHeadRow>
      <AccList data={list} selectItem={handleSelectItem} />
    </S.MainContainer>
  );
};
