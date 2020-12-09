import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import { HomePage, AccPage, RepoPage } from '../pages';
import * as S from './styled';

export const App = () => (

  <S.App fluid>
    <S.GlobalStyle />
    <Header />
    <S.ContentContainer fluid>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/:user" component={AccPage} exact />
        <Route path="/:user/:repo" component={RepoPage} />
      </Switch>
    </S.ContentContainer>
    <Footer />
  </S.App>
);
