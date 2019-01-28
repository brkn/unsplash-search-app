import React, { Component } from "react";
import logo from "./logo.svg";
import Dropdown from "./componenets/Dropdown";
import TextForm from "./componenets/TextForm";
import "./App.css";

class App extends Component {
  state = {
    collections: ["Wallpapers", "Nature", "Animals", "Fashion", "People"]
  };
  render() {
    return (
      <div className="App">
        <div className="Header">
          <div className="Logo-wrapper">
            <div className="Logo-rectangle">
              <img src={logo} className="Logo" alt="logo" />
            </div>
            <h1>
              <b>image</b> search
            </h1>
          </div>
          <div className="User-input">
            <TextForm/>
            <Dropdown header="Collections" items={this.state.collections} />
            <input type="submit" className="SearchButton" value="Search" />
          </div>
        </div>
        <div className="Content">"content will be here"</div>
      </div>
    );
  }
}

export default App;
