import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from '../../helpers/compose';
import { withApiRequest } from '../../helpers/hoc-helpers/withApiRequest';
import { Loader } from '../loader';
import { ErrorIndicator } from '../error-indicator';
import { getRepoInfoAndReadmeUrl } from '../../actions';
import * as S from './styled';
import { ControlPanel } from '../control-panel';

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
        <Container>
          <S.StyledHead xs={1} md={3}>
            <Col>{login}</Col>
            <Col><a href={ownerUrl}>Link to acc on Github</a></Col>
            <Col><Image src={avatarUrl} roundedCircle style={{ width: '5rem' }} /></Col>
          </S.StyledHead>
          <S.StyledHead xs={1} md={3}>
            <Col>{repoName}</Col>
            <Col>{description}</Col>
            <Col><a href={urlRepo}>Link to repo on Github</a></Col>
            <Col>{pushedAt}</Col>
          </S.StyledHead>
          <Row>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>Readme</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Repo&#39;s readme text</Card.Subtitle>
                <Card.Text><Card.Link href={readmeFileUrl}>Readme file</Card.Link></Card.Text>
                <Card.Link href={urlRepo}>Link to repo on Github</Card.Link>
              </Card.Body>
            </Card>
          </Row>
        </Container>
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
    return (
      <Container>
        <ErrorIndicator error={error} />
        <ControlPanel onlyHome />
      </Container>
    );
  }

  if (login === undefined) {
    return <ErrorIndicator error="This repo doesn't exist" />;
  }

  return (
    <>
      <RepoPageRender
        login={login}
        ownerUrl={ownerUrl}
        avatarUrl={avatarUrl}
        readmeFileUrl={readmeFileUrl}
        repoInfo={repoInfo.repoInfo}
      />
      <ControlPanel ownerLogin={login} />
    </>
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
