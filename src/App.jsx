import { Component, Fragment, useState } from "react";
import "./App.css";
import MenuBar from "./MenuBar";
import Tricks from "./Tricks";
class App extends Component {
  render() {
    return (
      <Fragment>
        <MenuBar />
        <Tricks/>
      </Fragment>
    );
  }
}

export default App;
