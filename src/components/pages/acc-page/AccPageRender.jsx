import React from 'react';
import Col from 'react-bootstrap/Col';
import { ControlPanel } from '../../control-panel';
import * as S from '../styled';
import { AccInfoBlock } from '../../acc-info-block';

export const AccPageRender = ({
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
          <S.StyledColStressFont xs={12} md={3}>{name}</S.StyledColStressFont>
          <S.StyledCol xs={12} md={3}>{description}</S.StyledCol>
          <S.StyledCol xs={12} md={3}><a href={url}>Link to repo on Github</a></S.StyledCol>
          <S.StyledCol xs={12} md={3}>{pushedAt}</S.StyledCol>
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
    <S.MainContainer>
      <AccInfoBlock login={login} ownerUrl={ownerUrl} avatarUrl={avatarUrl} />
      <S.StyledHeadRow>
        <Col>НАЗВАНИЕ</Col>
        <Col>ОПИСАНИЕ</Col>
        <Col>ССЫЛКА</Col>
        <Col>ДАТА ИЗМЕНЕНИЯ</Col>
      </S.StyledHeadRow>
      <ReposList data={list} selectRepo={handleSelectItem} />
      <ControlPanel onlyHome />
    </S.MainContainer>
  );
};
