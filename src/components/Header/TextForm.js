import React from "react";

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.setQuery(event.target.value);
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
