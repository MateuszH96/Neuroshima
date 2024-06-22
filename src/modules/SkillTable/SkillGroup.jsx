import React, { Component, Fragment } from "react";
import InputBox from "./InputBox";
class SkillGroup extends Component {
  constructor(props) {
    super(props);
    this.tmp = this.props.skill[this.props.klucz];
  }

  render() {
    return (
      <Fragment>
        {this.tmp.map((category, index) => {
          return <InputBox name={category} key={index} />;
        })}
      </Fragment>
    );
  }
}

export default SkillGroup;
