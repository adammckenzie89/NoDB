import React, { Component } from "react";
import Addnew from "./Addnew";
import Completed from "./Completed";

function Form(props) {
  return (
    <div className="questions">
      <header className="fheader">
        <h1 className="formheader">Lets get started!</h1>
      </header>
      <main className="questionstyle">
        <div>
          <h3>Inside or Outside</h3>
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
              Feel the breeze
            </label>
          </ul>
        </div>
        <div>
          <h3>Group</h3>
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
        </div>
        <div>
          <h3>Energy Level</h3>
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
        <Completed />
      </main>
    </div>
  );
}

export default Form;
