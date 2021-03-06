import React, { Component } from "react";
import queryString from "query-string";

import logo from "../../logo.svg";
import "./Header.css";

import { COLLECTIONS } from "../../constants.js";

import Dropdown from "./Dropdown/Dropdown";
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
    const { headerClassName, setQuery, setCollection, params } = this.props;
    const headerValue = params.collections || "Collections";
    return (
      <div className={headerClassName}>
        <div className="logo-wrapper">
          <div className="logo-rectangle">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <h1>
            <b>image</b> search
          </h1>
        </div>
        <form className="user-input" onSubmit={this.searchPhotos}>
          <TextForm setQuery={setQuery} query={params.query} />
          <Dropdown
            header={headerValue}
            items={COLLECTIONS}
            setCollection={setCollection}
          />
          <button className="search-button" type="submit">
            SEARCH
          </button>
        </form>
      </div>
    );
  }
}

export default Header;
