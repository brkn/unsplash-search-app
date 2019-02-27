import React from "react";
import classNames from "classnames";
import uuidv1 from "uuid/v1";

import DropdownItem from "./DropdownItem";

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

  render() {
    const { header, open, items } = this.state;
    const triangleClass = classNames("triangle", {
      "triangle-up": open,
      "triangle-down": !open
    });

    return (
      <div className="dropdown" onClick={this.toggleDropdown}>
        <div className="dd-header">{header}</div>
        <img src={triangle} className={triangleClass} alt="triangle" />
        {open && (
          <ul>
            {items.map(item => (
              <DropdownItem key={uuidv1()} item={item} onClick={this.selectItem(item)} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
