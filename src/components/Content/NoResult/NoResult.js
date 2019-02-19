import React, { Component } from "react";

import Image from "../Image/Image";

import no_result_image from "./no_result.jpeg";
import "./NoResult.css";

export default class NoResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        urls: {
          regular: no_result_image
        },
        description: "no_result_found"
      }
    };
  }

  render() {
    const { item } = this.state;
    return (
      <React.Fragment>
        <h2>No result is found, maybe try again? :(</h2>
        <Image className="no-result-image" item={item} />
      </React.Fragment>
    );
  }
}
