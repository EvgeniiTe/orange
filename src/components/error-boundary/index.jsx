import React, { Component } from 'react';
import { ErrorIndicator } from '../error-indicator';

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
      error: new Error('Something bad happened! We will fix it soon.'),
    });
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorIndicator error={error} />;
    }

    return children;
  }
}
