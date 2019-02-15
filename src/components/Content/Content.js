import React, { Component } from "react";
import ReactModal from "react-modal";

import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

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
    const elementThatModalAppends = document.querySelector(".content");
    console.log(elementThatModalAppends);
    ReactModal.setAppElement(elementThatModalAppends);
  };

  componentWillUnmount = () =>
    window.removeEventListener("resize", this.resizeItems);

  renderCells = () => {
    const { content } = this.props;
    const { openModal } = this;

    return content.map(item => {
      return (
        <div key={item.id} className="grid-cell" onClick={openModal}>
          <img
            src={item.urls.small}
            className="grid-cell-image"
            alt={item.description}
            onLoad={this.resizeItems}
          />
        </div>
      );
    });
  };

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

  render() {
    const { modalIsOpen } = this.state;
    const { afterOpenModal, closeModal } = this;
    return (
      <div className="content grid">
        <ReactModal
          /* className="modal" */
          /* overlayClassName="overlay" */
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Modal"
        >
          <div>"Test"</div>
        </ReactModal>
        {this.renderCells()}
      </div>
    );
  }
}

export default Content;
