import React, { Component } from "react";
import ReactModal from "react-modal";

import "./Modal.css";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
