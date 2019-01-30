import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";

class ContentLayout extends Component {
  render() {
    console.log(this.props.match.params);
    const {collection, querry} = this.props.match.params;
    return (
      <React.Fragment>
        <Header headerClassName={"Content-header"} />
        <Content collection={collection} querry= {querry}/>
      </React.Fragment>
    );
  }
}

export default ContentLayout;
