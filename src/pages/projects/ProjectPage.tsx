import * as React from "react";
import SectionContainer, {
  BackgroundType,
} from "@common/components/section-container/SectionContainer";
import BlockContainer from "@common/components/block-container/BlockContainer";
import ProjectCard from "./ProjectCard";
import { Grid, Typography } from "@mui/material";
import Compiler from "./compiler/Compiler";
import Slides from "./slides/Slides";
import AJPerformance from "./app-testing/AJPerformance";
import MoneyCare from "./money-care/MoneyCare";
import "./ProjectPage.scss";

interface Project {
  name: string;
  description: string;
  url: string;
  images: {
    light: string[];
    dark: string[];
  };
}

const Projects: Project[] = [Compiler, Slides, AJPerformance, MoneyCare];

class MainPage extends React.Component<unknown, unknown> {
  constructor(props: unknown) {
    super(props);
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render(): JSX.Element {
    return (
      <SectionContainer backgroundType={BackgroundType.MOUNTAINS_2}>
        <div className="project-page-project-list">
          <Grid
            container
            justifyItems="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <BlockContainer
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 25px",
                }}
              >
                <Typography
                  variant="h2"
                  component="div"
                  className="project-page-heading"
                >
                  Мои проекты
                </Typography>
              </BlockContainer>
            </Grid>
            {Projects.map(
              ({ name, description, images: { light, dark } }, key) => (
                <Grid key={key} item xs={12} sm={6} xl={6}>
                  <ProjectCard
                    name={name}
                    description={description}
                    images={dark.length > 0 ? dark : light}
                    onOpen={() => {
                      console.log("");
                    }}
                  />
                </Grid>
              ),
            )}
          </Grid>
        </div>
      </SectionContainer>
    );
  }
}

export default MainPage;
