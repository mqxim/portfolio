import * as React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, withRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import ProjectPage from "./projects/ProjectPage";
import ContactMe from "./contact-me/ContactMe";
import "./App.scss";
import Compiler from "../model/projects/compiler/Compiler";
import Slides from "../model/projects/slides/Slides";
import AJPerformance from "../model/projects/app-testing/AJPerformance";
import MoneyCare from "../model/projects/money-care/MoneyCare";
import SectionContainer, {
  BackgroundType,
} from "@common/components/section-container/SectionContainer";
import ProjectArticle from "./projects/ProjectArticle";

const Projects: { id }[] = [Compiler, Slides, AJPerformance, MoneyCare];

class App extends React.Component<Record<string, any>, unknown> {
  render(): JSX.Element {
    const { history } = this.props;

    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            <MainPage />
            <ProjectPage
              onViewProject={({ id }) => {
                history.push(id);
              }}
            />
            <ContactMe />
          </Route>
          <Route path={"/" + Compiler.id}>
            <SectionContainer
              backgroundType={BackgroundType.ABSTRACT_TIMEKEEPER}
            >
              <ProjectArticle {...(Compiler.article as any)} />
            </SectionContainer>
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(withRouter(App));
