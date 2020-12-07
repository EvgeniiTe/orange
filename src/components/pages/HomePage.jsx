import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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

const HomePageContainer = ({ history, getNthRandomAcc, list, loading, error }) => {
  useEffect(() => {
    getNthRandomAcc(1);
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
