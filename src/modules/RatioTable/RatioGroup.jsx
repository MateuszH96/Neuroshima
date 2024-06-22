import React, { Component } from "react";
class RatioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0",
    };
    this.labelName = this.props.name;
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
      <div className="ratio-group">
        <label className="ratio-label">{this.labelName}</label>
        <input
          className="ratio-input"
          value={this.state.value}
          type="text"
          inputMode="decimal"
          maxLength="2"
          min="0"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default RatioGroup;
