import React, { Component } from "react";

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countNumber: 0,
    };
  }

  incrementCounter() {
    this.setState({
      countNumber: this.state.countNumber + 1,
    });
  }
  discrementCounter() {
    this.setState({
      countNumber: this.state.countNumber - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.countNumber}</h1>
        <button onClick={() => this.incrementCounter()}>
          Increase Counter
        </button>
        <button onClick={() => this.discrementCounter()}>
          Discrease Counter
        </button>
        <h1>Count: {this.state.countNumber}</h1>
        <button onClick={() => this.incrementCounter()}>
          Increase Counter
        </button>
        <button onClick={() => this.discrementCounter()}>
          Discrease Counter
        </button>
        <h1>Count: {this.state.countNumber}</h1>
        <button onClick={() => this.incrementCounter()}>
          Increase Counter
        </button>
        <button onClick={() => this.discrementCounter()}>
          Discrease Counter
        </button>
        <h1>Count: {this.state.countNumber}</h1>
        <button onClick={() => this.incrementCounter()}>
          Increase Counter
        </button>
        <button onClick={() => this.discrementCounter()}>
          Discrease Counter
        </button>
        <h1>Count: {this.state.countNumber}</h1>
        <button onClick={() => this.incrementCounter()}>
          Increase Counter
        </button>
        <button onClick={() => this.discrementCounter()}>
          Discrease Counter
        </button>
      </div>
    );
  }
}
