import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Loader } from '../../loader';
import { ErrorIndicator } from '../../error-indicator';
import { ControlPanel } from '../../control-panel';

import { AccPageRender } from './AccPageRender';

export const AccPageContainer = ({
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
