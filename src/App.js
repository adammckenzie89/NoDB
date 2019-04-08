import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Activitylist from "./components/Activitylist.js";
import Addnew from "./components/Addnew";
import Footer from "./components/Footer";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <main>
        <div>
          <header className="head">
            <nav className="nav">
              <img
                className="logo"
                src="https://i.postimg.cc/CMv4gnhy/logo-via-logohub.png"
              />
            </nav>
          </header>
        </div>
        <div className="App">
          <Activitylist />
        </div>
        <div>
          <About />
        </div>
        {/* <div className="footer"> */}
        <Footer />
        {/* </div> */}
      </main>
    );
  }
}

export default App;
