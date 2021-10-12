import * as React from "react";
import { hot } from "react-hot-loader";

import ReactFullPage from "@fullpage/react-fullpage";

import "./../assets/scss/App.scss";
import Section1 from "./Section1";

const FullPage = () => (
  <ReactFullPage
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000}
    scrollHorizontally={true} /* Because we are using the extension */
    scrollHorizontallyKey={"YOUR KEY HERE"}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullPage.Wrapper>
          <div className="section about-me">
            <Section1 onScroll={() => fullpageApi.moveSectionDown()} />
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullPage.Wrapper>
      );
    }}
  />
);

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <div
          className="particles"
          style={{ width: "100vw", height: "100vh", position: "fixed" }}
        >
          <FullPage />
        </div>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
