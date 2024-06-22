import React, { Component } from "react";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0",
    };
  }

  handleChange = (event) => {
    let newValue = event.target.value;

    if (!isNaN(newValue) && newValue.length <= 2) {
      if (newValue.length > 1 && newValue.startsWith("0")) {
        newValue = newValue.substring(1);
      }
      if (newValue === "") {
        newValue = "0";
      }
      this.setState({ value: newValue });
    }
  };

  render() {
    return (
      <div className="skill-group">
        <label className="skill-label">{this.props.name}</label>
        <input
          className="skill-input"
          value={this.state.value}
          maxLength={2}
          min={0}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default InputBox;
