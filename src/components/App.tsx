import * as React from "react";
import { hot } from "react-hot-loader";

import ReactFullPage from "@fullpage/react-fullpage";
import Section1 from "./section-one/Section1";
import Section2 from "./section-two/Section2";
import Section3 from "./section-three/Section3";

import Section4 from "./section-four/Section4";
import Section5 from "./section-five/Section5";
import Section6 from "./section-six/Section6";

import "./../assets/scss/App.scss";
import Section7 from "./section-seven/Section7";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <div className="particles" style={{ width: "100vw", height: "100vh" }}>
          <React.Fragment>
            <Section1 />
            <div className="section">
              <Section2 />
            </div>
            <div className="section">
              <Section3 />
            </div>
            <div className="section">
              <Section4 />
            </div>
            <div className="section">
              <Section5 />
            </div>
            <div className="section">
              <Section6 />
            </div>
            <div className="section">
              <Section7 />
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
