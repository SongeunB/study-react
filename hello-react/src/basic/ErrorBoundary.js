import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true,
      errorInfo: errorInfo,
    });
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>에러가 발생했습니다.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
