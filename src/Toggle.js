import React, { Component } from "react";
import "./styles.css";

class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      showMe: true
    };
  }
  operation() {
    alert("Hi there");
  }

  render() {
    return (
      <div className="Toggle">
        <h1>Click Me To Toggle</h1>
        {this.state.showMe ? <div></div> : null}

        <button onClick={() => this.operation()}>Click me</button>
      </div>
    );
  }
}

export default Toggle;
