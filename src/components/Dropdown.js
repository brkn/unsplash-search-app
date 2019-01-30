import React from "react";
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
          className="List-item"
        >
          {item}
        </li>
      );
    });
  }

  render() {
    const { header, open } = this.state;
    return (
      <div className="Dropdown" onClick={this.toggleDropdown}>
        <div className="Dd-header">{header}</div>
        <img
          src={triangle}
          className={"triangle " + (open ? "triangle-up" : "triangle-down")}
          alt="triangle"
        />
        {open && <ul>{this.renderItems()}</ul>}
      </div>
    );
  }
}

export default Dropdown;
