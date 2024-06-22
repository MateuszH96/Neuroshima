import React, { Component } from "react";
import SkillGroup from "./SkillGroup";

class SkillPackage extends Component {
  render() {
    const { name, tableSkill, klucz } = this.props;
    return (
      <div className="skill-package">
        <h3>{name}</h3>
        <SkillGroup skill={tableSkill} key={klucz} klucz={name}/>
      </div>
    );
  }
}

export default SkillPackage;