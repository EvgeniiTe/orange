import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from '../../helpers/compose';
import { withApiRequest } from '../../helpers/hoc-helpers/withApiRequest';
import { Loader } from '../loader';
import { ErrorIndicator } from '../error-indicator';
import { getAccPublicRepos } from '../../actions';
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

  return (
    <main>
      <S.MainContainer>
        <Row style={{ paddingBottom: '2rem', border: '3px solid green', marginBottom: '1rem' }}>
          <Col>{login}</Col>
          <Col><a href={ownerUrl}>{ownerUrl}</a></Col>
          <Col><img src={avatarUrl} alt={avatarUrl} width="100rem" /></Col>
        </Row>
        <Row style={{ paddingBottom: '2rem' }}>
          <Col xs={2}>НАЗВАНИЕ</Col>
          <Col xs={2}>ОПИСАНИЕ</Col>
          <Col>ССЫЛКА</Col>
          <Col>ДАТА ИЗМЕНЕНИЯ</Col>
        </Row>
        <ReposList data={list} selectRepo={handleSelectItem} />
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
    return <ErrorIndicator error="This account has empty list of public repos" />;
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
