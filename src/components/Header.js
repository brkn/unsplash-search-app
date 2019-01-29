import React, { Component } from "react";
import logo from "../logo.svg";
import "./Header.css";
import collections from "../constants.js"

import Dropdown from "./Dropdown";
import TextForm from "./TextForm";

class Header extends Component {
	state = {};
  render() {
		console.log(this);
    return (
      <div className={this.props.headerClassName}>
        <div className="Logo-wrapper">
          <div className="Logo-rectangle">
            <img src={logo} className="Logo" alt="logo" />
          </div>
          <h1>
            <b>image</b> search
          </h1>
        </div>
        <form className="User-input">
          <TextForm />
          <Dropdown header="Collections" items={collections} />
          <button type="submit" className="Search-button" value="Search" />
        </form>
      </div>
    );
  }
}

export default Header;
