import React, { Component, Fragment } from "react";
import "./Tricks.css";
import skills from "./Params";
import { hero } from "./hero";
const changeValueHero = (name, val) => {
  hero[name] = parseInt(val);
};
class tmp {
  static skillList = [];
  static addSkill(newSkill) {
    this.skillList.push(newSkill);
  }
  static resetSkill() {
    this.skillList = [];
  }
}
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
          <li className="requirements-element" key={index}>{content}</li>
        ))}
      </Fragment>
    );
  }
  generateRequirements(or, and) {
    const requirements = [];
    if (!or && !and) {
      return <li className="requirement-element"> Brak wymagań</li>;
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
              this.props.elements["and"]
            )}
          </ul>
        </div>
        <div className="describe">
          <p className="trick-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            feugiat placerat lorem nec suscipit. Curabitur vel augue vitae risus
            condimentum.
          </p>
        </div>
        <div className="effect">
          <p className="trick-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            feugiat placerat lorem nec suscipit. Curabitur vel augue vitae risus
            condimentum.
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
      skillList: [
        {
          name: "3 2 1 Bum",
          or: null,
          and: { Mechanika: 3, "Materiały wybuchowe": 3 },
        },
        {
          name: "Aramis",
          or: null,
          and: { Zręczność: 14, "Broń ręczna": 5 },
        },
        {
          name: "Asekuracja",
          or: null,
          and: { Wspinaczka: 2 },
        },
        {
          name: "Aspirina i Tik-Taki",
          or: null,
          and: { "Leczenie chorób": 4, Blef: 3 },
        },
        {
          name: "Czterej pancerni",
          or: { "Wozy bojowe": 3, "Maszyny ciężkie": 3 },
          and: { "Opieka nad zwierzętami": 2 },
        },
      ],
    };
  }
  getSkillList(hero) {
    //TODO: add finding all skills for player
  }
  render() {
    return (
      <div className="container">
        {this.state.skillList.map((category, index) => (
          <TricksElements key={index} elements={category} />
        ))}
      </div>
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
      changeValueHero(this.props.name.replace(" ", "-"), newValue);
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
      changeValueHero(this.props.name.replace(" ", "-"), newValue);
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
        <div className="container">
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
