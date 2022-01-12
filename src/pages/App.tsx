import * as React from "react";
import { hot } from "react-hot-loader";
import MainPage from "./main/MainPage";
import "./App.scss";
import ProjectPage from "./projects/ProjectPage";

class App extends React.Component<Record<string, unknown>, unknown> {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <MainPage />
        <ProjectPage />
      </React.Fragment>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
