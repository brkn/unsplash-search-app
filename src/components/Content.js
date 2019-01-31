import React, { Component } from "react";

import "./Content.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: this.props.collection,
      query: this.props.query
    };
  }

  componentDidMount() {
  }

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
