import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import BlockContainer from "@common/components/block-container/BlockContainer";
import { Carousel } from "antd";

interface ProjectCardProps {
  name: string;
  description: string;
  images: string[];
  onOpen: () => void;
}

const ProjectCard = ({
  images,
  name,
  description,
  onOpen,
}: ProjectCardProps): JSX.Element => {
  return (
    <BlockContainer style={{ height: "100%" }}>
      <Card sx={{ minWidth: "100%", height: "100%", borderRadius: 0 }}>
        <div
          style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div style={{ paddingBottom: 30 }}>
            <Carousel>
              {images.map((src) => (
                <CardMedia
                  key={src}
                  component="img"
                  height="250"
                  image={src}
                  alt="Project Photo"
                />
              ))}
            </Carousel>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </div>
          <div style={{ position: "absolute", bottom: 0 }}>
            <CardActions>
              <Button size="large" onClick={() => onOpen()}>
                Смотреть
              </Button>
            </CardActions>
          </div>
        </div>
      </Card>
    </BlockContainer>
  );
};

export default ProjectCard;
