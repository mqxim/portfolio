import * as React from "react";
import BlockContainer from "@common/components/block-container/BlockContainer";
import ProjectCard from "./project-card/ProjectCard";
import { Grid, Typography } from "@mui/material";
import "./ProjectPage.scss";
import projects from "../../model/projects";

interface ProjectPageProps {
  onViewProject: ({ id }) => void;
}

class ProjectPage extends React.Component<ProjectPageProps, unknown> {
  constructor(props: ProjectPageProps) {
    super(props);
  }

  render(): JSX.Element {
    const { onViewProject } = this.props;

    return (
      <div className="project-page-project-list">
        <Grid container justifyItems="center" alignItems="stretch" spacing={3}>
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
    );
  }
}

export default ProjectPage;
