import React, { Component } from "react";

class DropdownItem extends Component {
  render() {
    const { item, onClick } = this.props;
    return (
        <li className="list-item" onClick={onClick}>
          {item}
        </li>
    );
  }
}

export default DropdownItem;
