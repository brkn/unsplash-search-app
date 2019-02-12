import React from "react";
import classNames from "classnames";

import triangle from "./triangle.svg";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      items: this.props.items,
      header: this.props.header
    };
  }
  toggleDropdown = () =>
    this.setState(prevState => ({
      open: !prevState.open
    }));

  selectItem = item => event => {
    this.setState({
      header: item,
      open: false
    });
    this.toggleDropdown();
    this.props.setCollection(item);
  };

  renderItems() {
    return this.state.items.map((item, key) => {
      return (
        <li
          key={key}
          onClick={this.selectItem(item)}
          className="list-item"
        >
          {item}
        </li>
      );
    });
  }

  render() {
    const { header, open } = this.state;
    const triangleClass = classNames(
      "triangle",
      {"triangle-up" :  open,
      "triangle-down": !open}
    )
    return (
      <div className="dropdown" onClick={this.toggleDropdown}>
        <div className="dd-header">{header}</div>
        <img
          src={triangle}
          className={triangleClass}
          alt="triangle"
        />
        {open && <ul>{this.renderItems()}</ul>}
      </div>
    );
  }
}

export default Dropdown;
