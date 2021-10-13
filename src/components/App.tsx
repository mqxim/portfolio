import * as React from "react";
import { hot } from "react-hot-loader";

import ReactFullPage from "@fullpage/react-fullpage";
import Section1 from "./section-one/Section1";
import Section2 from "./section-two/Section2";

import "./../assets/scss/App.scss";

const FullPage = () => (
  <ReactFullPage
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000}
    scrollHorizontally={true} /* Because we are using the extension */
    scrollHorizontallyKey={"YOUR KEY HERE"}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullPage.Wrapper>
          <Section1 onScroll={() => fullpageApi.moveSectionDown()} />
          <div className="section">
            <Section2 />
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
