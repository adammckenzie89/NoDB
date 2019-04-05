import React, { Component } from "react";
import Addnew from "./Addnew";

// class Form extends Component {
//   constructor(props) {
//     super(props);
//   }

function Form(props) {
  return (
    <div className="questions">
      <main>
        <div>
          <h1>Inside or Outside</h1>
          <ul>
            <label>
              <input
                name="inOrOut"
                type="radio"
                value="inside"
                checked={props.inOrOut === "inside"}
                onChange={props.handleChange}
              />
              Stay in
            </label>
            <br />
            <label>
              <input
                name="inOrOut"
                type="radio"
                value="outside"
                checked={props.inOrOut === "outside"}
                onChange={props.handleChange}
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
                checked={props.group === "Yes"}
                onChange={props.handleChange}
              />
              Yes
            </label>
            <br />
            <label>
              <input
                name="group"
                type="radio"
                value="No"
                checked={props.group === "No"}
                onChange={props.handleChange}
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
                checked={props.energy === "Low"}
                onChange={props.handleChange}
              />
              Low
            </label>
            <br />
            <label>
              <input
                name="energy"
                type="radio"
                value="High"
                checked={props.energy === "High"}
                onChange={props.handleChange}
              />
              High
            </label>
          </ul>
        </div>
        <section>
          <Addnew updateNewActivity={props.updateNewActivity} />
        </section>
      </main>
    </div>
  );
}

export default Form;
