import * as React from "react";
import { hot } from "react-hot-loader";
import MainPage from "./main/MainPage";
import ProjectPage from "./projects/ProjectPage";
import ContactMe from "./contact-me/ContactMe";
import "./App.scss";

class App extends React.Component<Record<string, unknown>, unknown> {
  render(): JSX.Element {
    return (
      <React.Fragment>
        <MainPage />
        <ProjectPage />
        <ContactMe />
      </React.Fragment>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
