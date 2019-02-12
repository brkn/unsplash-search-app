import React from "react";

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = event => {
    const { value } = event.currentTarget;
    this.props.setQuery(value);
  };

  render() {
    const value = this.props.query ? this.props.query : "";
    return (
      <input
        type="text"
        value={value}
        onChange={this.handleChange}
        placeholder="Query"
      />
    );
  }
}

export default TextForm;
