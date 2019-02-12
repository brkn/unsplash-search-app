import React, { Component } from "react";

import Content from "./Content";
import Header from "../Header/Header";

import "./ContentLayout.css";

class ContentLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const {
      params,
      content,
      searchPhotos,
      setQuery,
      setCollection
    } = this.props;
    return (
      <div className="content-layout">
        <Header
          {...this.props}
          headerClassName={"content-header"}
          searchPhotos={searchPhotos}
          setQuery={setQuery}
          setCollection={setCollection}
          params={params}
        />
        <Content content={content} />
      </div>
    );
  }
}

export default ContentLayout;
