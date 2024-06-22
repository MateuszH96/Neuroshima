import { Component } from "react";
import RatioGroup from "./RatioGroup";
import skills from "../Params";
class RatioPackage extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="ratio-package">
        {Object.keys(skills).map((category, index) => {
          return <RatioGroup key={index} name={category} />;
        })}
      </div>
    );
  }
}

export default RatioPackage;
