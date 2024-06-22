import { Component, Fragment } from "react";
import "./SkillTable.css";
import SkillPackage from "./SkillPackage";
import skills from "../Params";
class SkillTable extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
  }
  render() {
    return (
      <div className="table" id={this.title}>
        <h2 className="table-title">{this.title}</h2>
        {Object.keys(skills[this.title]).map((category, index) => {
          return (
            <SkillPackage
              key={index}
              name={category}
              tableSkill={skills[this.title]}
                klucz={index}
            />
          );
        })}
      </div>
    );
  }
}
export default SkillTable;
