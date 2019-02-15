import React, { Component } from "react";

import Modal from "./Modal/Modal";
import Image from "./Image/Image";

import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalImage: null
    };
  }

  openModal = item => event => {
    this.setState({
      modalIsOpen: true,
      modalImage: item
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      modalImage: null
    });
  };

  resizeItems = () => {
    const grid = document.querySelector(".grid");
    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    const items = document.getElementsByClassName("grid-cell");
    const images = document.getElementsByClassName("grid-cell-image");
    for (var i = 0; i < items.length; i++) {
      const cellHeight = parseInt(
        window.getComputedStyle(images[i]).getPropertyValue("height")
      );
      let rowSpan = Math.ceil((cellHeight + rowGap) / (rowHeight + rowGap));
      items[i].style.gridRowEnd = "span " + rowSpan;
    }
  };

  componentDidMount = () => window.addEventListener("resize", this.resizeItems);

  componentWillUnmount = () =>
    window.removeEventListener("resize", this.resizeItems);

  render() {
    const { content } = this.props;
    const { openModal, closeModal } = this;
    const { modalIsOpen , modalImage} = this.state;

    return (
      <div className="content grid">
        <Modal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          modalImage={modalImage}
        />
        {content.map(item => (
          <Image
            item={item}
            resizeItems={this.resizeItems}
            openModal={openModal(item)}
            className="grid-cell-image"
          />
        ))}
      </div>
    );
  }
}

export default Content;
