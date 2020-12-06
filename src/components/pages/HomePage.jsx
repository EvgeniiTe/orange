import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { withRouter } from 'react-router-dom';
import * as S from './styled';

import { getNthRandomAcc } from '../../services/service';

const AccList = ({ data, selectItem }) => {
  const items = data.map(({ id, login, html_url: url, avatar_url: avatarUrl }) => {
    return (
      <S.StyledRow key={id} onClick={() => selectItem(login)}>
        <Col xs={2}>{login}</Col>
        <Col><a href={url}>{url}</a></Col>
        <Col><img src={avatarUrl} alt={avatarUrl} width="100rem" /></Col>
      </S.StyledRow>
    );
  });

  return (
    <>
      { items }
    </>
  );
};

export const HomePageTemplate = ({ history }) => {
  const [list, setList] = useState([]);

  useEffect(async () => {
    const data = await getNthRandomAcc(1);
    setList(data);
  }, []);

  const handleSelectItem = (login) => {
    history.push(`/${login}`);
  };

  return (
    <main>
      <S.MainContainer>
        <Row style={{ paddingBottom: '2rem' }}>
          <Col xs={2}>ЛОГИН</Col>
          <Col>ССЫЛКА НА АККАУНТ</Col>
          <Col>АВАТАР</Col>
        </Row>
        <AccList data={list} selectItem={handleSelectItem} />
      </S.MainContainer>
    </main>
  );
};

export const HomePage = withRouter(HomePageTemplate);
