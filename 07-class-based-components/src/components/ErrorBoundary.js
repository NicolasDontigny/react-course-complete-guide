import React from 'react';
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  // This lifecycle method function makes the component an 'error boundary' one
  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.log('error boundary: ', error);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
