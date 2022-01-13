import * as React from "react";
import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import BlockContainer from "@common/components/block-container/BlockContainer";
import "./ProjectArticle.scss";
import BulkButton from "@common/components/button/BulkButton";
import { Carousel } from "antd";
import { useState } from "react";

enum BlockType {
  TEXT = "text",
  IMAGE_CAROUSEL = "image_carousel",
}

interface Block {
  type: BlockType;
}

interface Text extends Block {
  heading: string;
  text: string | JSX.Element | JSX.Element[];
}

interface ImageCarousel extends Block {
  heading: string;
  light: string[];
  dark: string[];
}

interface ProjectArticleProps {
  heading: string;
  blocks: (Text | ImageCarousel)[];
}

const ImageCarouselThemeSwitch = (props: {
  light: string[];
  dark: string[];
}) => {
  const { light, dark } = props;

  const [type, setType] = useState(dark.length > 0 ? "dark" : "light");

  return (
    <React.Fragment>
      {!(dark.length === 0 || light.length === 0) && (
        <div style={{ float: "right", marginBottom: 15 }}>
          <ButtonGroup size="small">
            <Button
              variant={type === "light" ? "contained" : null}
              onClick={() => setType("light")}
            >
              Light
            </Button>
            <Button
              variant={type === "dark" ? "contained" : null}
              onClick={() => setType("dark")}
            >
              Dark
            </Button>
          </ButtonGroup>
        </div>
      )}
      <div style={{ clear: "both" }} />
      {type === "light" && (
        <Carousel>
          {light.map((i, k) => (
            <div key={k}>
              <img
                src={i}
                alt="Project photo"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 4,
                }}
              />
            </div>
          ))}
        </Carousel>
      )}
      {type == "dark" && (
        <Carousel>
          {dark.map((i, k) => (
            <div key={k}>
              <img
                src={i}
                alt="Project photo"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 4,
                }}
              />
            </div>
          ))}
        </Carousel>
      )}
    </React.Fragment>
  );
};

class ProjectArticle extends React.Component<ProjectArticleProps, unknown> {
  render(): JSX.Element {
    const { heading, blocks } = this.props;

    return (
      <React.Fragment>
        <div className="project-article-container">
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
                  variant="h4"
                  component="div"
                  className="project-article-heading"
                >
                  {heading}
                </Typography>
              </BlockContainer>
            </Grid>
            {blocks.map((b, k) => {
              switch (b.type) {
                case BlockType.TEXT:
                  b = b as Text;
                  return (
                    <Grid key={k} item xs={12}>
                      <BlockContainer
                        style={{
                          padding: "25px 25px",
                        }}
                      >
                        <div>
                          <Typography variant="h5" gutterBottom component="div">
                            {b.heading}
                          </Typography>
                        </div>
                        <div>
                          <Typography
                            variant="body1"
                            component="div"
                            color="text.secondary"
                          >
                            {b.text}
                          </Typography>
                        </div>
                      </BlockContainer>
                    </Grid>
                  );
                case BlockType.IMAGE_CAROUSEL:
                  b = b as ImageCarousel;
                  return (
                    <Grid key={k} item xs={12}>
                      <BlockContainer
                        style={{
                          padding: "25px 25px",
                        }}
                      >
                        <div>
                          <Typography variant="h5" gutterBottom component="div">
                            {b.heading}
                          </Typography>
                        </div>
                        <div>
                          <ImageCarouselThemeSwitch
                            light={b.light}
                            dark={b.dark}
                          />
                        </div>
                      </BlockContainer>
                    </Grid>
                  );
              }
            })}
            <Grid item xs={12}>
              <BulkButton text="Назад" />
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectArticle;
