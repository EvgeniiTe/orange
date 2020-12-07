import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from '../../helpers/compose';
import { withApiRequest } from '../../helpers/hoc-helpers/withApiRequest';
import { Loader } from '../loader';
import { ErrorIndicator } from '../error-indicator';
import { getRepoInfoAndReadmeUrl } from '../../actions';
import * as S from './styled';

const RepoPageRender = ({
  login,
  ownerUrl,
  avatarUrl,
  readmeFileUrl,
  repoInfo
}) => {
  const { name: repoName, description, html_url: urlRepo, pushed_at: pushedAt } = repoInfo;
  return (
    <main>
      <S.MainContainer>
        <Row style={{ paddingBottom: '2rem', border: '3px solid green', marginBottom: '1rem' }}>
          <Col>{login}</Col>
          <Col><a href={ownerUrl}>{ownerUrl}</a></Col>
          <Col><img src={avatarUrl} alt={avatarUrl} width="100rem" /></Col>
        </Row>
        <Row style={{ paddingBottom: '2rem', border: '3px solid green', marginBottom: '1rem' }}>
          <Col>{repoName}</Col>
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

const RepoPageContainer = ({ history, getRepo, repoInfo, loading, error }) => {
  const [owner, setOwner] = useState({});
  const [readmeFileUrl, setReadmeFileUrl] = useState({});

  useEffect(() => {
    getRepo(history.location.pathname);
  }, []);

  useEffect(() => {
    if (repoInfo) {
      const ownerData = repoInfo.repoInfo.owner;
      setOwner(ownerData);
    }
    if (repoInfo) {
      const { download_url: urlForReadme } = repoInfo.readme;
      setReadmeFileUrl(urlForReadme);
    }
  }, [repoInfo]);

  const {
    login = undefined,
    html_url: ownerUrl = undefined,
    avatar_url: avatarUrl = undefined
  } = owner;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  if (login === undefined) {
    return <ErrorIndicator error="This repo doesn't exist" />;
  }

  return (
    <RepoPageRender
      login={login}
      ownerUrl={ownerUrl}
      avatarUrl={avatarUrl}
      readmeFileUrl={readmeFileUrl}
      repoInfo={repoInfo.repoInfo}
    />
  );
};

const mapStateToProps = ({ repoSelected: { repoInfo, loading, error } }) => {
  return { repoInfo, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { serviceFunctions } = ownProps;
  return bindActionCreators(
    { getRepo: getRepoInfoAndReadmeUrl(serviceFunctions) },
    dispatch
  );
};

export const RepoPage = compose(
  withApiRequest(),
  connect(mapStateToProps, mapDispatchToProps)
)(withRouter(RepoPageContainer));
