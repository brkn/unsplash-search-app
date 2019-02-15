import React, { Component } from "react";
import ReactModal from "react-modal";

import "./Modal.css";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    const elementThatModalAppendsTo = document.querySelector(".content");
    console.log(elementThatModalAppendsTo);
    ReactModal.setAppElement(elementThatModalAppendsTo);
  };

  render() {
    const { closeModal, modalIsOpen } = this.props;

    return (
      <ReactModal
        /* className="modal" */
        /* overlayClassName="overlay" */
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <div>"Test"</div>
      </ReactModal>
    );
  }
}
