import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/app';
import { ErrorBoundary } from './components/error-boundary';
import { store } from './store';
import { ServiceProvider } from './helpers/service-context';
import {
  getNthRandomAcc,
  getAccRepos,
  getRepoInfoAndReadme
} from './services/service';

const serviceFunctions = {
  getNthRandomAcc,
  getAccRepos,
  getRepoInfoAndReadme
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <ServiceProvider value={serviceFunctions}>
          <Router>
            <App />
          </Router>
        </ServiceProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
