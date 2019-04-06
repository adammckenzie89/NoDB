import React, { Component } from "react";
import axios from "axios";
import Form from "./Form.js";

class Activitylist extends Component {
  constructor() {
    super();

    this.state = {
      editInput: "",
      newActivity: [],
      activity: [],
      inOrOut: "",
      group: "",
      energy: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateNewActivity = this.updateNewActivity.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    axios
      .get("/api/defaultActivities")
      .then(response => {
        this.setState({
          activity: response.data
        });
      })
      .catch(errors => console.log("errors"));
    axios
      .get("/api/userActivity")
      .then(response => {
        this.setState({
          newActivity: response.data
        });
      })
      .catch(errors => console.log("errors"));
  }
  updateNewActivity(param) {
    this.setState({ newActivity: param });
  }
  updateActivity(updated) {
    axios
      .put("/api/userActivity", { newValue: this.state.editInput, updated })
      .then(response => {
        this.setState({ newActivity: response.data });
      })
      .catch(errors => console.log("errors"));
  }
  deleteActivity(id) {
    axios
      .delete("/api/userActivity/" + id)
      .then(response => {
        this.setState({ newActivity: response.data });
      })
      .catch(errors => console.log("errors"));
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
            <img src={e.activity} />
          </div>
        );
      });
    let New = this.state.newActivity.map((activities, index) => {
      console.log(activities);
      return (
        <div key={index}>
          <h1>{activities.activities}</h1>
          <button onClick={() => this.updateActivity(activities.activities)}>
            Change
          </button>
          <input onChange={e => this.setState({ editInput: e.target.value })} />
          <button onClick={() => this.deleteActivity(activities.id)}>
            &#10006;
          </button>
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
          updateNewActivity={this.updateNewActivity}
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
