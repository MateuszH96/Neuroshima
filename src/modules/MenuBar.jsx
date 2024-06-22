import { Component } from "react";
import "./MenuBar.css";

class MenuBar extends Component {
  render() {
    return (
      <nav id="nav-links">
        <a className="main-link" href="#skill-values">
          Parametry postaci
        </a>
        <a className="main-link" href="#tricks-list">
          Sztuczki
        </a>
        <a className="main-link" href="#">
          Empty2
        </a>
        <a className="main-link" href="#">
          Empty3
        </a>
      </nav>
    );
  }
}

export default MenuBar;
