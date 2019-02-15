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
    const { item, resizeItems, openModal, className } = this.props;

    return (
      <div key={item.id} className="grid-cell" onClick={openModal}>
        <img
          src={item.urls.regular}
          className={className}
          alt={item.description}
          onLoad={className === "grid-cell-image" ? resizeItems : ""}
        />
      </div>
    );
  }
}

export default Image;
