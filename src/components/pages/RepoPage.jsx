import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { withRouter } from 'react-router-dom';
import * as S from './styled';

import { getRepoReadme, getRepoInfo } from '../../services/service';

const RepoPageTemplate = ({ history }) => {
  const [repoInfo, setRepoInfo] = useState({});
  const [owner, setOwner] = useState({});
  const [readmeFileUrl, setReadmeFileUrl] = useState({});

  useEffect(async () => {
    const data = await getRepoInfo(history.location.pathname);
    console.log(history.location.pathname);
    setRepoInfo(data);
    if (data) {
      const ownerData = data.owner;
      setOwner(ownerData);
    }
    const readme = await getRepoReadme(history.location.pathname);
    if (readme) {
      const { download_url: urlForReadme } = readme;
      setReadmeFileUrl(urlForReadme);
    }
  }, []);

  const {
    login = undefined,
    html_url: urlOwner = undefined,
    avatar_url: avatarUrl = undefined
  } = owner;
  const { name, description, html_url: urlRepo, pushed_at: pushedAt } = repoInfo;

  return (
    <main>
      <S.MainContainer>
        <Row style={{ paddingBottom: '2rem', border: '3px solid green', marginBottom: '1rem' }}>
          <Col>{login}</Col>
          <Col><a href={urlOwner}>{urlOwner}</a></Col>
          <Col><img src={avatarUrl} alt={avatarUrl} width="100rem" /></Col>
        </Row>
        <Row style={{ paddingBottom: '2rem', border: '3px solid green', marginBottom: '1rem' }}>
          <Col>{name}</Col>
          <Col>{description}</Col>
          <Col><a href={urlRepo}>{urlRepo}</a></Col>
          <Col>{pushedAt}</Col>
        </Row>
        <Row>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>Readme</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Repo&#39;s readme text</Card.Subtitle>
              <Card.Text><Card.Link href={readmeFileUrl}>Readme&#39;s file</Card.Link></Card.Text>
              <Card.Link href={urlRepo}>Link to repo on Github</Card.Link>
            </Card.Body>
          </Card>
        </Row>
      </S.MainContainer>
    </main>
  );
};

export const RepoPage = withRouter(RepoPageTemplate);
