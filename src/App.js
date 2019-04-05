import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Activitylist from "./components/Activitylist.js";
import Addnew from "./components/Addnew";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <header className="head">
            <nav className="nav">Sunday Funday</nav>
          </header>
        </div>
        <div className="App">
          <Activitylist />
        </div>
      </div>
    );
  }
}

export default App;
