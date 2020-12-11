import React from 'react';
import * as S from './styled';
import { PushedAt } from '../pages/acc-page/pushed-at';

export const RepoInfoBlock = ({ repoName, description, urlRepo, pushedAt }) => {
  return (
    <S.RepoInfoBlock xs={1} md={4}>
      <S.StyledColStressFont>{repoName}</S.StyledColStressFont>
      <S.RepoCol>{description}</S.RepoCol>
      <S.RepoCol><a href={urlRepo}>Link to repo on Github</a></S.RepoCol>
      <S.RepoCol>
        <PushedAt pushedAt={pushedAt} />
      </S.RepoCol>
    </S.RepoInfoBlock>
  );
};
