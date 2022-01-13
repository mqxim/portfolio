import * as React from "react";
import SectionContainer, {
  BackgroundType,
} from "@common/components/section-container/SectionContainer";
import BlockContainer from "@common/components/block-container/BlockContainer";
import ProjectCard from "./ProjectCard";
import { Grid, Typography } from "@mui/material";
import "./ProjectPage.scss";
import projects from "../../model/projects";

interface ProjectPageProps {
  onViewProject: ({ id }) => void;
}

class ProjectPage extends React.Component<ProjectPageProps, unknown> {
  constructor(props: ProjectPageProps) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render(): JSX.Element {
    const { onViewProject } = this.props;

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
            {projects.map(
              ({ id, name, description, images: { light, dark } }, key) => (
                <Grid key={key} item xs={12} sm={6} xl={6}>
                  <ProjectCard
                    name={name}
                    description={description}
                    images={dark.length > 0 ? dark : light}
                    onOpen={() => {
                      onViewProject({ id });
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

export default ProjectPage;
