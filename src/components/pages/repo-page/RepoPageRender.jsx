import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { AccInfoBlock } from '../../acc-info-block';
import { RepoInfoBlock } from '../../repo-info-block';
import * as S from '../styled';

export const RepoPageRender = ({
  login,
  ownerUrl,
  avatarUrl,
  readmeFileUrl,
  repoInfo
}) => {
  const { name: repoName, description, html_url: urlRepo, pushed_at: pushedAt } = repoInfo;
  return (
    <S.MainContainer>
      <AccInfoBlock login={login} ownerUrl={ownerUrl} avatarUrl={avatarUrl} />
      <RepoInfoBlock
        repoName={repoName}
        description={description}
        urlRepo={urlRepo}
        pushedAt={pushedAt}
      />
      <Row>
        <Card style={{ width: '100%', textAlign: 'center' }}>
          <Card.Body>
            <Card.Title>Readme</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Repo&#39;s readme text</Card.Subtitle>
            <Card.Text><Card.Link href={readmeFileUrl}>Readme file</Card.Link></Card.Text>
            <Card.Link href={urlRepo}>Link to repo on Github</Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </S.MainContainer>
  );
};
