import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCounter() {
    this.setState({
      count: this.state.count + 1,
    });
    // this.state.count = this.state.count + 1;
    // console.log(this.state.count);
  }
  DiscrementCounter() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.incrementCounter()}>
          Increase Counter
        </button>
        <button onClick={() => this.DiscrementCounter()}>
          Discrease Counter
        </button>
      </div>
    );
  }
}
