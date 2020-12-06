import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import * as S from './styled';

import { getAccRepos } from '../../services/service';

const ReposList = ({ data, selectRepo }) => {
  const items = data.map(({ id, name, description, html_url: url, pushed_at: pushedAt }) => {
    return (
      <S.StyledRow key={id} onClick={() => selectRepo(name)}>
        <Col xs={2}>{name}</Col>
        <Col xs={2}>{description}</Col>
        <Col><a href={url}>{url}</a></Col>
        <Col>{pushedAt}</Col>
      </S.StyledRow>
    );
  });

  return (
    <>
      { items }
    </>
  );
};

const AccPageTemplate = ({ history }) => {
  const [accRepos, setAccRepos] = useState([]);
  const [owner, setOwner] = useState({});

  useEffect(async () => {
    const data = await getAccRepos(history.location.pathname);
    setAccRepos(data);
    if (data[0]) {
      const ownerData = data[0].owner;
      console.log(ownerData);
      setOwner(ownerData);
    }
  }, []);

  const { login = undefined, html_url: url = undefined, avatar_url: avatarUrl = undefined } = owner;

  const handleSelectItem = (repo) => {
    history.push(`/${login}/${repo}`);
  };

  return (
    <main>
      <S.MainContainer>
        <Row style={{ paddingBottom: '2rem', border: '3px solid green', marginBottom: '1rem' }}>
          <Col>{login}</Col>
          <Col><a href={url}>{url}</a></Col>
          <Col><img src={avatarUrl} alt={avatarUrl} width="100rem" /></Col>
        </Row>
        <Row style={{ paddingBottom: '2rem' }}>
          <Col xs={2}>НАЗВАНИЕ</Col>
          <Col xs={2}>ОПИСАНИЕ</Col>
          <Col>ССЫЛКА</Col>
          <Col>ДАТА ИЗМЕНЕНИЯ</Col>
        </Row>
        <ReposList data={accRepos} selectRepo={handleSelectItem} />
      </S.MainContainer>
    </main>
  );
};

export const AccPage = withRouter(AccPageTemplate);
