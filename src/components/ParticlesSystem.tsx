import * as React from "react";
import Particles from "react-particles-js";

const ParticlesSystem = (): JSX.Element => {
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
            value: 10,
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
            out_mode: "out",
          },
          shape: {
            type: ["image", "circle"],
            image: [
              {
                src: "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
                height: 24,
                width: 24,
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/277px-Vue.js_Logo_2.svg.png",
                height: 24,
                width: 24,
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png",
                height: 24,
                width: 24,
              },
            ],
          },
          color: {
            value: "#f1f1f1",
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 8,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ParticlesSystem;
