import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";

class ContentLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  searchPhotos = () => {
    this.props.searchPhotos();
  };

  setQuery = q => {
    this.props.setQuery(q);
  };

  setCollection = q => {
    this.props.setCollection(q);
  };

  render() {
    const { params, content } = this.props;
    return (
      <React.Fragment>
        <Header
          {...this.props}
          headerClassName={"Content-header"}
          searchPhotos={this.searchPhotos}
          setQuery={this.setQuery}
          setCollection={this.setCollection}
          params={params}
        />
        <Content content={content} />
      </React.Fragment>
    );
  }
}

export default ContentLayout;
