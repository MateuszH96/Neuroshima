import { Component, Fragment, useState } from "react";
import "./App.css";
import MenuBar from "./modules/MenuBar";
import TitleSection from "./modules/TitleSection";
import RatioTable from "./modules/RatioTable/RatioTable";
import skills from "./modules/Params";
import SkillTable from "./modules/SkillTable/SkillTable";
class App extends Component {
  render() {
    return (
      <Fragment>
        <MenuBar />
        <TitleSection title="Parametry Postaci" />
        <div className="container">
          <RatioTable title="Wspolczynniki" />
          {Object.keys(skills).map((category, index) => {
            return <SkillTable key={index} title={category} />;
          })}
        </div>
        <TitleSection title="Sztuczki" />
      </Fragment>
    );
  }
}

export default App;
