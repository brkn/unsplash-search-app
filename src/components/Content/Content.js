import React, { Component } from "react";
import ReactModal from "react-modal";

import Modal from "./Modal/Modal";
import Image from "./Image/Image";

import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
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

  componentDidMount = () => {
    window.addEventListener("resize", this.resizeItems);
    const elementThatModalAppendsTo = document.querySelector(".content");
    console.log(elementThatModalAppendsTo);
    ReactModal.setAppElement(elementThatModalAppendsTo);
  };

  componentWillUnmount = () =>
    window.removeEventListener("resize", this.resizeItems);

  render() {
    const { content } = this.props;
    const { openModal, closeModal } = this;
    const { modalIsOpen } = this.state;

    return (
      <div className="content grid">
        <Modal closeModal={closeModal} modalIsOpen={modalIsOpen} />
        {content.map(item => (
          <Image
            item={item}
            resizeItems={this.resizeItems}
            openModal={openModal}
          />
        ))}
      </div>
    );
  }
}

export default Content;
