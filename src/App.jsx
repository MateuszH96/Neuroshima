import React, { Component, Fragment } from "react";
import "./App.css";
import MenuBar from "./MenuBar"; // Poprawiony sposób importu
import Tricks from "./Tricks";

class App extends Component {
  render() {
    return (
      <Fragment>
        <MenuBar />
        <Tricks />
      </Fragment>
    );
  }
}

export default App;
