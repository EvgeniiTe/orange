import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Col, Container, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from '../../helpers/compose';
import { withApiRequest } from '../../helpers/hoc-helpers/withApiRequest';
import { getRandomAccs } from '../../actions';
import { Loader } from '../loader';
import { ErrorIndicator } from '../error-indicator';
import * as S from './styled';

const HomePageRender = ({ list, handleSelectItem }) => {
  const AccList = ({ data = [], selectItem }) => {
    const items = data.map(({ id, login, html_url: url, avatar_url: avatarUrl }) => {
      return (
        <S.StyledRow key={id} onClick={() => selectItem(login)}>
          <Col xs={12} md={2}>{login}</Col>
          <Col xs={12} md={6}><a href={url}>Link to acc on Github</a></Col>
          <Col xs={12} md={2}><Image src={avatarUrl} roundedCircle style={{ width: '5rem' }} /></Col>
          <Col xs={12} md={2}><Button variant="primary" onClick={() => selectItem(login)}>MORE INFO</Button></Col>
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
          <S.StyledHeadRow>
            <Col md={2}>ЛОГИН</Col>
            <Col md={6}>ССЫЛКА НА АККАУНТ</Col>
            <Col md={2}>АВАТАР</Col>
          </S.StyledHeadRow>
          <AccList data={list} selectItem={handleSelectItem} />
        </Container>
      </S.MainContainer>
    </main>
  );
};

const HomePageContainer = ({ history, getNthRandomAcc, list, loading, error }) => {
  useEffect(() => {
    getNthRandomAcc(10);
  }, []);

  const handleSelectItem = (login) => {
    history.push(`/${login}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return <HomePageRender list={list} handleSelectItem={handleSelectItem} />;
};

const mapStateToProps = ({ accList: { list, loading, error } }) => {
  return { list, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { serviceFunctions } = ownProps;
  return bindActionCreators(
    { getNthRandomAcc: getRandomAccs(serviceFunctions) },
    dispatch
  );
};

export const HomePage = compose(
  withApiRequest(),
  connect(mapStateToProps, mapDispatchToProps)
)(withRouter(HomePageContainer));
