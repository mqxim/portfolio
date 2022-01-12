import * as React from "react";
import SectionContainer, {
  BackgroundType,
} from "@common/components/section-container/SectionContainer";
import ProjectCard from "./project-card/ProjectCard";
import { Grid, Typography } from "@mui/material";
import Compiler from "./compiler/Compiler";
import Slides from "./slides/Slides";

import "./ProjectPage.scss";
import AJPerformance from "./app-testing/AJPerformance";

interface Project {
  name: string;
  description: string;
  url: string;
  images: {
    light: string[];
    dark: string[];
  };
}

const Projects: Project[] = [Compiler, Slides, AJPerformance];

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
              <div>
                <Typography variant="h2" gutterBottom component="div">
                  Мои проекты
                </Typography>
              </div>
            </Grid>
            {Projects.map(
              ({ name, description, images: { light, dark }, url }, key) => (
                <Grid key={key} item xs={12} sm={6} xl={4}>
                  <ProjectCard
                    name={name}
                    description={description}
                    imageSrc={
                      dark.length > 0
                        ? dark[0]
                        : light.length > 0
                        ? light[0]
                        : null
                    }
                    redirectDisabled={!!!url}
                    onOpen={() => {
                      console.log("");
                    }}
                    onRedirect={() => window.open(url, "_blank").focus()}
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
