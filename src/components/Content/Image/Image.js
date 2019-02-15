import React, { Component } from "react";

import "./Image.css";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  render() {
    const { item, resizeItems, className } = this.props;

    return (
      <img
        src={item.urls.regular}
        className={className}
        alt={item.description}
        onLoad={className === "grid-cell-image" ? resizeItems : ""}
      />
    );
  }
}

export default Image;
