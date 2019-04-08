import React, { Component } from "react";
import axios from "axios";
import Activitylist from "./Activitylist";
import New from "./New";

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
    let newPic = this.state.newActivity.map((activity, index) => {
      return <New index={index} activity={activity.activity} />;
    });
    return (
      <div>
        <h4 className="post">Post Image</h4>
        <label> </label>
        <input
          placeholder="Image URL"
          onChange={e => this.handleInputChange(e.target.value)}
        />
        <button onClick={e => this.handleNewActivity(e)}>&#43;</button>
        <br />
        {newPic}
      </div>
    );
  }
}

export default Addnew;
