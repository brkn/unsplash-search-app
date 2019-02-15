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
    const { item, resizeItems, openModal } = this.props;

    return (
      <div key={item.id} className="grid-cell" onClick={openModal}>
        <img
          src={item.urls.small}
          className="grid-cell-image"
          alt={item.description}
          onLoad={resizeItems}
        />
      </div>
    );
  }
}

export default Image;
