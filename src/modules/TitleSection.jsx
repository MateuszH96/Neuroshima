import { Component } from "react";
import './TitleSection.css'
class TitleSection extends Component{
    constructor(props){
        super(props)
        this.title = this.props.title
    }
    render(){
        return(
            <div className="section-title">
                <hr className="left-hr"/>
                <h1 className="section-title-text">{this.title}</h1>
                <hr className="right-hr"/>
            </div>
    )}
}

export default TitleSection