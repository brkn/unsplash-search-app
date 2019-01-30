import React from "react";

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => this.setState({ value: event.target.value });

  render() {
    const { value } = this.state;
    return <input type="text" value={value} onChange={this.handleChange} />;
  }
}

export default TextForm;
