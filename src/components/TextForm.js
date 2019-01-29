import React from "react";

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = (event) => this.setState({ value: event.target.value });

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="Text-input">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

export default TextForm;
