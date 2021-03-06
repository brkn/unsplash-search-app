import React, { Component } from "react";

import Modal from "./Modal/Modal";
import Image from "./Image/Image";
import NoResult from "./NoResult/NoResult";

import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalItem: null
    };
  }

  openModal = item => event => {
    this.setState({
      modalIsOpen: true,
      modalItem: item
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

  componentDidMount = () => window.addEventListener("resize", this.resizeItems);

  componentWillUnmount = () =>
    window.removeEventListener("resize", this.resizeItems);

  render() {
    const { content } = this.props;
    const { openModal, closeModal } = this;
    const { modalIsOpen, modalItem } = this.state;

    return (
      <div className="content grid">
        <Modal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          modalItem={modalItem}
        />
        {content.length ? (
          content.map(item => (
            <div key={item.id} className="grid-cell" onClick={openModal(item)}>
              <Image
                item={item}
                resizeItems={this.resizeItems}
                className="grid-cell-image"
              />
            </div>
          ))
        ) : (
          <NoResult />
        )}
      </div>
    );
  }
}

export default Content;
