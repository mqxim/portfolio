import * as React from "react";
import ParticlesSystem from "./ParticlesSystem";
import { Button } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const photo = require("../../assets/img/my_photo.jpg");

import "./styles/section1.scss";

interface Section1Props {
  onScroll: () => void;
}

const bg = require("../../assets/img/background.svg");

const Section1 = ({ onScroll }: Section1Props): JSX.Element => {
  return (
    <React.Fragment>
      <div
        className="section section-one"
        style={{
          backgroundImage: `url(${bg.default})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
          <ParticlesSystem />
        </div>
        <div className="my-photo">
          <img src={photo.default} alt="photo" />
          <div className="descr" style={{ position: "absolute" }}>
            <h2 className="about-me-name">Максим Ильин</h2>
            <h3 className="about-me-description">Личное портфолио</h3>
            <Button
              style={{ backgroundColor: "rgb(254, 15, 23)", color: "#fff" }}
              variant="contained"
              disableElevation
              onClick={() => onScroll()}
              startIcon={<KeyboardArrowDownIcon />}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Продолжить
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section1;
