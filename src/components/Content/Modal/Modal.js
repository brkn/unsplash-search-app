import React, { Component } from "react";
import ReactModal from "react-modal";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Image from "../Image/Image";

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
    const item = this.props.modalItem;

    return (
      <ReactModal
        className="modal"
        overlayClassName="overlay"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <Image item={item} className="modal-image" />
        <ProfileInfo user={item ? item.user : null} />
      </ReactModal>
    );
  }
}
