import React, { Component } from "react";
import uuidv1 from "uuid/v1";

class DropdownItem extends Component {
  render() {
    const { item, onClick } = this.props;
    return (
        <li className="list-item" key={uuidv1()} onClick={onClick}>
          {item}
        </li>
    );
  }
}

export default DropdownItem;
