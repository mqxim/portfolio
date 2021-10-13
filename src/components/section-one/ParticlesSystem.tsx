import * as React from "react";
import Particles from "react-particles-js";

const photo1 = require("./images/1.png");
const photo2 = require("./images/2.png");
const photo3 = require("./images/3.png");
const photo4 = require("./images/4.png");
const photo5 = require("./images/5.png");
const photo6 = require("./images/6.png");
const photo7 = require("./images/7.png");

export const ParticlesSystem = (): JSX.Element => {
  React.useEffect(() => {
    const item = document.getElementById("tsparticles");
    item.style.width = "100vw";
    item.style.height = "100vh";
  });

  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 5,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 2,
            out_mode: "bounce",
          },
          shape: {
            type: ["image"],
            image: [
              {
                src: photo1.default,
                height: 2500,
                width: 2500,
              },
              {
                src: photo2.default,
                height: 2500,
                width: 2500,
              },
              {
                src: photo3.default,
                height: 2500,
                width: 2500,
              },
              {
                src: photo4.default,
                height: 2500,
                width: 2500,
              },
              {
                src: photo5.default,
                height: 2500,
                width: 2500,
              },
              {
                src: photo6.default,
                height: 2500,
                width: 2500,
              },
              {
                src: photo7.default,
                height: 2500,
                width: 2500,
              },
            ],
          },
          color: {
            value: "#f1f1f1",
          },
          size: {
            value: 70,
            random: false,
            anim: {
              enable: false,
              speed: 5,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: true,
      }}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ParticlesSystem;
