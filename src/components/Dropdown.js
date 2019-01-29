import React from "react";

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
    this.setState( (prevState) => ({
      open: !prevState.open
    }));

  selectItem = (item) =>
    this.setState({
      header: item,
      open: false
    });

  renderItems() {
    if (!this.props.items) {
      return;
    }

    return this.props.items.map(item => {
      return (
        <li onClick={() => this.selectItem(item)} className="List-item">
          {item}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="Dropdown">
        <div className="Dd-header" onClick={() => this.toggleDropdown()}>
          <div className="Dd-header-title">
            {this.state.header}
            {this.state.open ? "^":"v"}
          </div>
        </div>  
        { this.state.open &&
            <ul>{this.renderItems()}</ul>
        }
      </div>
    );
  }
}

export default Dropdown;