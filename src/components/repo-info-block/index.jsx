import React from 'react';
import * as S from './styled';

export const RepoInfoBlock = ({ repoName, description, urlRepo, pushedAt }) => {
  return (
    <S.RepoInfoBlock xs={1} md={4}>
      <S.StyledCol>{repoName}</S.StyledCol>
      <S.StyledCol>{description}</S.StyledCol>
      <S.StyledCol><a href={urlRepo}>Link to repo on Github</a></S.StyledCol>
      <S.StyledCol>{pushedAt}</S.StyledCol>
    </S.RepoInfoBlock>
  );
};
