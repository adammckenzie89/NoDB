import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Activitylist from "./components/Activitylist.js";
import Addnew from "./components/Addnew";

class App extends Component {
  render() {
    return (
      <main>
        <div>
          <header className="head">
            <nav className="nav">
              <img
                className="logo"
                src="https://i.postimg.cc/6QJ91pYN/sflogo.png"
              />
            </nav>
          </header>
        </div>
        <div className="App">
          <Activitylist />
        </div>
      </main>
    );
  }
}

export default App;
