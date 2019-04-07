import React, { Component } from "react";
import axios from "axios";
import Activitylist from "./Activitylist";

class Addnew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newActivity: [],
      input: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewActivity = this.handleNewActivity.bind(this);
  }
  handleInputChange(value) {
    this.setState({ input: value });
  }
  handleNewActivity(e) {
    axios
      .post("/api/userActivity", { activities: this.state.input })
      .then(response => {
        console.log(response);
        this.setState({ newActivity: response.data });
        this.props.updateNewActivity(response.data);
      });
  }

  render() {
    let New = this.state.newActivity.map((activity, index) => {
      return <h4 key={index}>{activity.activity}</h4>;
    });
    return (
      <div>
        <h4>Post your own image</h4>
        <label> --> </label>
        <input
          placeholder="New Activity"
          onChange={e => this.handleInputChange(e.target.value)}
        />
        <button onClick={e => this.handleNewActivity(e)}>&#43;</button>
        <br />
        {New}
      </div>
    );
  }
}

export default Addnew;
