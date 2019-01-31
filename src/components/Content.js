import React, { Component } from "react";

import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content
    };
  }

  /* componentDidMount() {
    let grid = document.getElementsByClassName("grid")[0];
    let rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    let rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    let items = document.getElementsByClassName("Grid-cell");
    for (let item in items) {
      let rowSpan = Math.ceil(
        (item.querySelector(".content").getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = "span " + rowSpan;
    }
  } */

  renderCells = () => {
    const { content } = this.props;

    return content.map(item => {
      return (
        <div key={item.id} className="Grid-cell">
          <img
            src={item.urls.small}
            className="Grid-cell-image"
            alt={item.description}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="Content grid">{this.renderCells()}</div>;
  }
}

export default Content;
