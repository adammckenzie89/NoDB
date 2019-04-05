import React, { Component } from "react";
import Addnew from "./Addnew";

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="questions">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>Inside or Outside</h1>
            <ul>
              <label>
                <input
                  name="inOrOut"
                  type="radio"
                  value="inside"
                  checked={this.props.inOrOut === "inside"}
                  onChange={this.props.handleChange}
                />
                Stay in
              </label>
              <br />
              <label>
                <input
                  name="inOrOut"
                  type="radio"
                  value="outside"
                  checked={this.props.inOrOut === "outside"}
                  onChange={this.props.handleChange}
                />
                Feel the breeze!
              </label>
            </ul>
            {/* <button type="submit">Decide</button> */}
          </div>
          <div>
            <h1>Group?</h1>
            <ul>
              <label>
                <input
                  name="group"
                  type="radio"
                  value="Yes"
                  checked={this.props.group === "Yes"}
                  onChange={this.props.handleChange}
                />
                Yes
              </label>
              <br />
              <label>
                <input
                  name="group"
                  type="radio"
                  value="No"
                  checked={this.props.group === "No"}
                  onChange={this.props.handleChange}
                />
                No
              </label>
            </ul>
            {/* <button type="submit">Decide</button> */}
          </div>
          <div>
            <h1>Energy Level</h1>
            <ul>
              <label>
                <input
                  name="energy"
                  type="radio"
                  value="Low"
                  checked={this.props.energy === "Low"}
                  onChange={this.props.handleChange}
                />
                Low
              </label>
              <br />
              <label>
                <input
                  name="energy"
                  type="radio"
                  value="High"
                  checked={this.props.energy === "High"}
                  onChange={this.props.handleChange}
                />
                High
              </label>
            </ul>
          </div>
          <section>
            <Addnew />
          </section>
        </form>
      </div>
    );
  }
}

export default Form;
