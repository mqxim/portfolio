import * as React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, withRouter, History } from "react-router-dom";
import SectionContainer, {
  BackgroundType,
} from "@common/components/section-container/SectionContainer";
import MainPage from "./main/MainPage";
import ProjectPage from "./projects/ProjectPage";
import Compiler from "../model/projects/compiler/Compiler";
import Slides from "../model/projects/slides/Slides";
import AJPerformance from "../model/projects/app-testing/AJPerformance";
import MoneyCare from "../model/projects/money-care/MoneyCare";
import ProjectArticle from "./projects/project-article/ProjectArticle";
import "./App.scss";
import AboutMe from "./about-me/AboutMe";

interface AppProps {
  history: History;
}

class App extends React.Component<AppProps, unknown> {
  componentDidUpdate() {
    if (window.location.hash) {
      document.querySelector(window.location.hash).scrollIntoView();
    }
  }

  render(): JSX.Element {
    const { history } = this.props;

    return (
      <SectionContainer isLoading={false}>
        <Switch>
          <Route path={"/" + Compiler.id}>
            <SectionContainer backgroundType={BackgroundType.CONSTELLATION}>
              <ProjectArticle
                {...(Compiler.article as any)}
                onBackToProjects={() => {
                  history.push("/#projects");
                }}
              />
            </SectionContainer>
          </Route>
          <Route path={"/" + Slides.id}>
            <SectionContainer backgroundType={BackgroundType.ABSTRACT_WAVES}>
              <ProjectArticle
                {...(Slides.article as any)}
                onBackToProjects={() => {
                  history.push("/#projects");
                }}
              />
            </SectionContainer>
          </Route>
          <Route path={"/" + MoneyCare.id}>
            <SectionContainer backgroundType={BackgroundType.MOUNTAINS}>
              <ProjectArticle
                {...(MoneyCare.article as any)}
                onBackToProjects={() => {
                  history.push("/#projects");
                }}
              />
            </SectionContainer>
          </Route>
          <Route path={"/" + AJPerformance.id}>
            <SectionContainer backgroundType={BackgroundType.ZIG_ZAG}>
              <ProjectArticle
                {...(AJPerformance.article as any)}
                onBackToProjects={() => {
                  history.push("/#projects");
                }}
              />
            </SectionContainer>
          </Route>
          <Route path="/">
            <SectionContainer
              backgroundType={BackgroundType.CONFETTI}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <MainPage
                onAction={(action) => {
                  document.querySelector("#" + action).scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </SectionContainer>
            <SectionContainer backgroundType={BackgroundType.CONFETTI}>
              <div id="about-me">
                <AboutMe />
              </div>
            </SectionContainer>
            <SectionContainer backgroundType={BackgroundType.CONFETTI}>
              <div id="projects">
                <ProjectPage
                  onViewProject={({ id }) => {
                    history.push(id);
                    window.scrollTo({ top: 0 });
                  }}
                />
              </div>
            </SectionContainer>
          </Route>
        </Switch>
      </SectionContainer>
    );
  }
}

declare let module: AppProps;

export default hot(module)(withRouter(App));
