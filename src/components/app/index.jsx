import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import { HomePage, AccPage, RepoPage } from '../pages';
import * as S from './styled';

export const App = () => (
  <>
    <S.GlobalStyle />
    <Header />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/:id" component={AccPage} />
      <Route path="/:id/repo" component={RepoPage} />
    </Switch>
    <Footer />
  </>
);
