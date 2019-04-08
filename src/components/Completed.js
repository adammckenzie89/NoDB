import React, { Component } from "react";

class Completed extends Component {
  constructor() {
    super();

    this.state = {
      completed: 0
    };
  }
  completedButton() {
    this.setState({ completed: this.state.completed + 1 });
  }
  resetbutton() {
    this.setState({ completed: 0 });
  }

  render() {
    return (
      <div>
        <h3> Activities {this.state.completed}</h3>
        <button onClick={() => this.completedButton()}>Add</button>
        <button onClick={() => this.resetbutton()}>Reset</button>
      </div>
    );
  }
}

export default Completed;
