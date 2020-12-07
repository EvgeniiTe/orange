import React, { useState, useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from '../../helpers/compose';
import { withApiRequest } from '../../helpers/hoc-helpers/withApiRequest';
import { Loader } from '../loader';
import { ErrorIndicator } from '../error-indicator';
import { getAccPublicRepos } from '../../actions';
import { ControlPanel } from '../control-panel';
import * as S from './styled';

const AccPageRender = ({
  list,
  handleSelectItem,
  login,
  ownerUrl,
  avatarUrl,
}) => {
  const ReposList = ({ data = [], selectRepo }) => {
    const items = data.map(({ id, name, description, html_url: url, pushed_at: pushedAt }) => {
      return (
        <S.StyledRow key={id} onClick={() => selectRepo(name)}>
          <Col xs={12} md={3}>{name}</Col>
          <Col xs={12} md={3}>{description}</Col>
          <Col xs={12} md={3}><a href={url}>Link to repo on Github</a></Col>
          <Col xs={12} md={3}>{pushedAt}</Col>
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
    <main>
      <S.MainContainer>
        <Container>
          <S.StyledHead xs={1} md={3}>
            <Col>{login}</Col>
            <Col><a href={ownerUrl}>{ownerUrl}</a></Col>
            <Col><Image src={avatarUrl} roundedCircle style={{ width: '5rem' }} /></Col>
          </S.StyledHead>
          <S.StyledHeadRow>
            <Col>НАЗВАНИЕ</Col>
            <Col>ОПИСАНИЕ</Col>
            <Col>ССЫЛКА</Col>
            <Col>ДАТА ИЗМЕНЕНИЯ</Col>
          </S.StyledHeadRow>
          <ReposList data={list} selectRepo={handleSelectItem} />
          <ControlPanel onlyHome />
        </Container>
      </S.MainContainer>
    </main>
  );
};

const AccPageContainer = ({
  history,
  getAccRepos,
  reposList,
  loading,
  error
}) => {
  const [owner, setOwner] = useState({});

  useEffect(() => {
    getAccRepos(history.location.pathname);
  }, []);

  useEffect(() => {
    if (reposList[0]) {
      const ownerData = reposList[0].owner;
      setOwner(ownerData);
    }
  }, [reposList]);

  const {
    login = undefined,
    html_url: ownerUrl = undefined,
    avatar_url: avatarUrl = undefined
  } = owner;

  const handleSelectItem = (repo) => {
    history.push(`/${login}/${repo}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  if (login === undefined) {
    return (
      <Container>
        <ErrorIndicator error="This account has empty list of public repos" />
        <ControlPanel onlyHome />
      </Container>

    );
  }

  return (
    <AccPageRender
      list={reposList}
      handleSelectItem={handleSelectItem}
      login={login}
      ownerUrl={ownerUrl}
      avatarUrl={avatarUrl}
    />

  );
};

const mapStateToProps = ({ accSelected: { reposList, loading, error } }) => {
  return { reposList, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { serviceFunctions } = ownProps;
  return bindActionCreators(
    { getAccRepos: getAccPublicRepos(serviceFunctions) },
    dispatch
  );
};

export const AccPage = compose(
  withApiRequest(),
  connect(mapStateToProps, mapDispatchToProps)
)(withRouter(AccPageContainer));
