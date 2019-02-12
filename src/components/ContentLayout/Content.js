import React, { Component } from "react";

import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  resizeItems = () => {
    const grid = document.getElementsByClassName("Grid")[0];
    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    const items = document.getElementsByClassName("Grid-cell");
    const images = document.getElementsByClassName("Grid-cell-image");
    for (var i = 0; i < items.length; i++) {
      const cellHeight = parseInt(
        window.getComputedStyle(images[i]).getPropertyValue("height")
      );
      let rowSpan = Math.ceil((cellHeight + rowGap) / (rowHeight + rowGap));
      items[i].style.gridRowEnd = "span " + rowSpan;
    }
  };
  componentDidMount = () => window.addEventListener("resize", this.resizeItems);

  componentWillUnmount = () =>
    window.removeEventListener("resize", this.resizeItems);

  renderCells = () => {
    const { content } = this.props;

    return content.map(item => {
      return (
        <div key={item.id} className="Grid-cell">
          <img
            src={item.urls.small}
            className="Grid-cell-image"
            alt={item.description}
            onLoad={this.resizeItems}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="Content Grid">{this.renderCells()}</div>;
  }
}

export default Content;
