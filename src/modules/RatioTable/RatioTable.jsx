import { Component, Fragment } from "react";
import RatioPackage from "./RatioPackage";
import './RatioTable.css'
class RatioTable extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    
  }
  render() {
    return (
      <div className="table">
        <h2 className="table-title">{this.title}</h2>
        <RatioPackage />
      </div>
    );
  }
}
export default RatioTable;
