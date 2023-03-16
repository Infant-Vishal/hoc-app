import React, { Component } from "react";

const withCounter = (WrappedComponent, payload) => {
  class WithCounter extends Component {
    constructor() {
      super();

      this.state = {
        count: 0,
      };
    }

    increment = () => {
      this.setState((prevState) => {
        return { count: prevState.count + payload };
      });
    };
    render() {
      const { count } = this.state;

      return <WrappedComponent count={count} increment={this.increment} {...this.props} />;
    }
  }
  return WithCounter;
};

export default withCounter;
