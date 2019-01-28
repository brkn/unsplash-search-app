import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
        items: this.props.items,
        header: this.props.header
    };
    this.selectItem = this.selectItem.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }   
  toggleDropdown() {
    this.setState({
      open: !this.state.open
    });
  }

  selectItem(item) {
    this.setState({
      header: item,
      open: false
    });
  }

  renderItems() {
    if (!this.props.items) {
      return;
    }

    return this.props.items.map(item => {
      return (
        <li onClick={() => this.selectItem(item)} className="list-item">
          {item}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dd-header" onClick={() => this.toggleDropdown()}>
          <div className="dd-header-title">
            {this.header}
            {this.open ? "^":"v"}
          </div>
        </div>  
        { this.open &&
            <ul>{this.renderItems()}</ul>
        }
      </div>
    );
  }
}

export default Dropdown;
