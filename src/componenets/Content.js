import React, { Component } from "react";
class Content extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="Content">
        "content will be here"
        {console.log(this.props.match.params)}
      </div>
    );
  }
}

export default Content;
