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
        <h4 className="activityAdder"> Activities {this.state.completed}</h4>
        <button onClick={() => this.completedButton()}>&#43;</button>
        <button onClick={() => this.resetbutton()}>Reset</button>
      </div>
    );
  }
}

export default Completed;
