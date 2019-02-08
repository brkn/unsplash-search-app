import React, { Component } from "react";
import queryString from "query-string";

import logo from "../logo.svg";
import "./Header.css";

import { COLLECTIONS } from "../constants.js";

import Dropdown from "./Dropdown";
import TextForm from "./TextForm";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  searchPhotos = event => {
    const { params } = this.props;
    const searchString = queryString.stringify(params);

    event.preventDefault();
    this.props.searchPhotos();
    this.props.history.push({
      pathname: "/search",
      search: searchString
    });
  };

  render() {
    const { headerClassName, setQuery, setCollection } = this.props;
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
          <TextForm setQuery={setQuery} />
          <Dropdown
            header="Collections"
            items={COLLECTIONS}
            setCollection={setCollection}
          />
          <button className="Search-button" type="submit">
            SEARCH
          </button>
        </form>
      </div>
    );
  }
}

export default Header;
