import * as React from "react";
import ParticlesSystem from "../../pages/main/particle-system/ParticlesSystem";
import { Button } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import "./styles/section1.scss";

interface Section1Props {
  onScroll: () => void;
}

const bg = require("../../assets/img/background.svg");

const Section1 = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="section section-one" style={{}}>
        <div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
          <ParticlesSystem />
        </div>
        <div className="my-photo">
          <div className="descr" style={{ position: "absolute" }}>
            <h2 className="about-me-name">Максим Ильин</h2>
            <h3 className="about-me-description">Личное портфолио</h3>

            <Button
              style={{ backgroundColor: "rgb(254, 15, 23)", color: "#fff" }}
              variant="contained"
              disableElevation
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
