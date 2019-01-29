import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#45b141";
  }

  render() {
    console.log(this.props.match.params);
    return <div className="Content">
      "content will be here"
      </div>;
  }
}

export default Content;
