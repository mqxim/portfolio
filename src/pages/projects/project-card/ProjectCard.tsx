import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ProjectCardProps {
  imageSrc: string;
  name: string;
  description: string;
  onOpen: () => void;
  onRedirect: () => void;
  redirectDisabled: boolean;
}

const ProjectCard = ({
  imageSrc,
  name,
  description,
  onOpen,
  onRedirect,
  redirectDisabled,
}: ProjectCardProps): JSX.Element => {
  return (
    <Card sx={{ minWidth: "100%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div style={{ paddingBottom: 70 }}>
          <CardMedia
            component="img"
            height="200"
            image={imageSrc}
            alt="Project Photo"
          />
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
            <Button size="small" variant="outlined" onClick={() => onOpen()}>
              Подробнее
            </Button>
            <Button
              size="small"
              disabled={redirectDisabled}
              onClick={() => onRedirect()}
            >
              Открыть в новой вкладке
            </Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
