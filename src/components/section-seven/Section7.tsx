import * as React from "react";

import "./styles/section7.scss";
import Carousel from "react-material-ui-carousel";
import { useEffect } from "react";

const i1 = require("./images/1.gif");
const i2 = require("./images/2.png");
const i3 = require("./images/3.gif");
const i4 = require("./images/4.gif");
const i5 = require("./images/5.gif");

const pictures = [i1.default, i2.default, i3.default, i4.default, i5.default];

pictures.forEach((p) => {
  const img = new Image();
  img.src = p;
});

const Section7 = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="section-seven">
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <h2 className="s7-heading">Анализатор качества сайтов</h2>
          <div className="s7-project-container">
            <Carousel
              showArrows={false}
              autoPlay={false}
              style={{ height: "80vh" }}
            >
              <div className="slide-item">
                <img src={i1.default} alt="" />
              </div>
              <div className="slide-item">
                <img src={i2.default} alt="" />
              </div>
              <div className="slide-item">
                <img src={i3.default} alt="" />
              </div>
              <div className="slide-item">
                <img src={i4.default} alt="" />
              </div>
              <div className="slide-item">
                <img src={i5.default} alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section7;
