import React, { Component, Fragment, createRef } from 'react';
import "./Tricks.css";
import skills from "./data/Params";
import { hero } from "./data/hero";
import getListOfTricks from "./data/listOfTrick";
const changeValueHero = (name, val) => {
  if(name === "Zrecznosc"){
    name = "Zręczność"
  }
  hero[name] = parseInt(val);
};

class TricksElements extends Component {
  constructor(props) {
    super(props);
  }
  formatOr = (or) => {
    const elements = [];
    Object.keys(or).map((content, index) =>
      elements.push(content + ": " + or[content])
    );
    return elements.join(" lub ");
  };
  requirementsView(view) {
    return (
      <Fragment>
        {view.map((content, index) => (
          <li className="requirements-element" key={index}>
            {content}
          </li>
        ))}
      </Fragment>
    );
  }
  generateRequirements(or, and, additional) {
    const requirements = [];
    if (!or && !and) {
      return additional === null ?  <li className="requirement-element"> Brak wymagań</li>:<li className="requirement-element">{additional}</li>;
    }
    if (or) {
      requirements.push(this.formatOr(or));
    }
    if (and) {
      Object.keys(and).map((content, index) =>
        requirements.push(content + ": " + and[content])
      );
    }
    return this.requirementsView(requirements);
  }
  render() {
    return (
      <div className="table">
        <h3 className="trick-name">{this.props.elements["name"]}</h3>
        <div className="requirements">
          <ul className="requirements-list">
            {this.generateRequirements(
              this.props.elements["or"],
              this.props.elements["and"],
              this.props.elements["additional"]
            )}
          </ul>
        </div>
        <div className="describe">
          <p className="trick-text">
            {this.props.elements["describe"]}
          </p>
        </div>
        <div className="effect">
          <p className="trick-text">
          {this.props.elements["effect"]}
          </p>
        </div>
        <div className="effect">
          <p className="trick-text">
          {this.props.elements["book"]}
          </p>
        </div>
      </div>
    );
  }
}
class TricksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillList: [],
    };
    this.tricksListRef = createRef();
  }

  getSkillList(player, allTricks) {
    return getListOfTricks(player, allTricks);
  }

  changeSkillList = (newSkill) => {
    this.setState({
      skillList: newSkill,
    }, () => {
      this.scrollToTricksList();
    });
  };

  clickBtn = () => {
    let cachedTricks = JSON.parse(localStorage.getItem('customTrickData'));
    if (!cachedTricks) {
      fetch('https://neurotool.pythonanywhere.com/tricks')
        .then(response => {
          if (!response.ok) {
            cachedTricks = [];
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          localStorage.setItem('customTrickData', JSON.stringify(data));
          cachedTricks = data;
          const skillToShow = this.getSkillList(hero, cachedTricks);
          this.changeSkillList(skillToShow);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    } else {
      const skillToShow = this.getSkillList(hero, cachedTricks);
      this.changeSkillList(skillToShow);
    }
  };

  scrollToTricksList = () => {
    if (this.tricksListRef.current) {
      this.tricksListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="searchSection">
          <button className="searchBtn" onClick={this.clickBtn}>{"Szukaj"}</button>
        </div>
        <div className="container" id="tricks-list" ref={this.tricksListRef}>
          {this.state.skillList.map((category, index) => (
            <TricksElements key={index} elements={category} />
          ))}
        </div>
      </Fragment>
    );
  }
}

class InputBox extends Component {
  state = {
    value: "0",
  };

  handleChange = (event) => {
    let newValue = event.target.value;

    if (!isNaN(newValue) && newValue.length <= 2) {
      if (newValue.length > 1 && newValue.startsWith("0")) {
        newValue = newValue.substring(1);
      }
      if (newValue === "") {
        newValue = "0";
      }
      changeValueHero(this.props.name, newValue);
      this.setState({ value: newValue });
    }
  };

  render() {
    return (
      <div className="skill-group">
        <label className="skill-label">{this.props.name}</label>
        <input
          className="skill-input"
          value={this.state.value}
          maxLength={2}
          min={0}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const SkillGroup = ({ skill, klucz }) => (
  <Fragment>
    {skill[klucz].map((category, index) => (
      <InputBox name={category} key={index} />
    ))}
  </Fragment>
);

const SkillPackage = ({ name, tableSkill, klucz }) => (
  <div className="skill-package">
    <h3>{name}</h3>
    <SkillGroup skill={tableSkill} klucz={name} />
  </div>
);

const SkillTable = ({ title }) => (
  <div className="table" id={title}>
    <h2 className="table-title">{title}</h2>
    {Object.keys(skills[title]).map((category, index) => (
      <SkillPackage
        key={index}
        name={category}
        tableSkill={skills[title]}
        klucz={category}
      />
    ))}
  </div>
);

class RatioGroup extends Component {
  state = {
    value: "0",
  };

  handleChange = (event) => {
    let newValue = event.target.value;

    if (!isNaN(newValue) && newValue.length <= 2) {
      if (newValue.length > 1 && newValue.startsWith("0")) {
        newValue = newValue.substring(1);
      }
      if (newValue === "") {
        newValue = "0";
      }
      changeValueHero(this.props.name, newValue);
      this.setState({ value: newValue });
    }
  };

  render() {
    return (
      <div className="ratio-group">
        <label className="ratio-label">{this.props.name}</label>
        <input
          className="ratio-input"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const RatioPackage = () => (
  <div className="ratio-package">
    {Object.keys(skills).map((category, index) => (
      <RatioGroup key={index} name={category} />
    ))}
  </div>
);

const RatioTable = ({ title }) => (
  <div className="table">
    <h2 className="table-title">{title}</h2>
    <RatioPackage />
  </div>
);

const TitleSection = ({ title }) => (
  <div className="section-title">
    <hr className="left-hr" />
    <h1 className="section-title-text">{title}</h1>
    <hr className="right-hr" />
  </div>
);

class Tricks extends Component {
  render() {
    return (
      <Fragment>
        <TitleSection title="Parametry Postaci" />
        <div className="container" id="skill-values">
          <RatioTable title="Wspolczynniki" />
          {Object.keys(skills).map((category, index) => (
            <SkillTable key={index} title={category} />
          ))}
        </div>
        <TitleSection title="Sztuczki" />
        <TricksList />
      </Fragment>
    );
  }
}

export default Tricks;
