import React, { Component } from "react";
import axios from "axios";
import Form from "./Form.js";

class Activitylist extends Component {
  constructor() {
    super();

    this.state = {
      newActivity: [],
      activity: [],
      inOrOut: "",
      group: "",
      energy: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    axios.get("/api/activities").then(response => {
      console.log(response);
      this.setState({
        activity: response.data
      });
    });
    axios.get("/api/newActivity").then(response => {
      this.setState({
        newActivity: response.data
      });
    });
  }

  render() {
    const act = this.state.activity
      .filter((element, index) => {
        return (
          element.inOrOut.includes(this.state.inOrOut.toLowerCase()) &&
          element.group.includes(this.state.group.toLowerCase()) &&
          element.energy.includes(this.state.energy.toLowerCase())
        );
      })
      .map((e, i) => {
        return (
          <div key={i}>
            <h1>{e.activity}</h1>
          </div>
        );
      });
    let New = this.state.newActivity.map((activities, index) => {
      return (
        <div key={index}>
          <h1>{activities.activities}</h1>
        </div>
      );
    });
    return (
      <div className="form">
        <div className="things">
          {act}
          {New}
        </div>
        <Form
          handleChange={this.handleChange}
          inOrOut={this.state.inOrOut}
          group={this.state.group}
          energy={this.state.energy}
        />
      </div>
    );
  }
}

export default Activitylist;
