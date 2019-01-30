import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: this.props.collection,
      query: this.props.query
    };
  }

  componentDidMount() {
  }

  render() {
    return <div className="Content">
      "content will be here"
      </div>;
  }
}

export default Content;
