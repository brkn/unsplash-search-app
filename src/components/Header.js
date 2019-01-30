import React, { Component } from "react";

import logo from "../logo.svg";
import "./Header.css";

import collections from "../constants.js";

import Dropdown from "./Dropdown";
import TextForm from "./TextForm";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  searchPhotos = event => {
    event.preventDefault();
    this.props.searchPhotos();
  };

  setQuery = q => {
    this.props.setQuery(q);
  };

  setCollection = q => {
    this.props.setCollection(q);
  };

  render() {
    const { headerClassName } = this.props;
    const { query, collection } = this.props.params;
    
    return (
      <div className={headerClassName}>
        <div className="Logo-wrapper">
          <div className="Logo-rectangle">
            <img src={logo} className="Logo" alt="logo" />
          </div>
          <h1>
            <b>image</b> search
          </h1>
        </div>
        <form className="User-input" onSubmit={this.searchPhotos}>
          <TextForm setQuery={this.setQuery} />
          <Dropdown
            header="Collections"
            items={collections}
            setCollection={this.setCollection}
          />
          <button className="Search-button" type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Header;
