import * as React from "react";
import Particles from "react-particles-js";

const photo1 = require("../assets/img/1.png");

const photo2 = require("../assets/img/2.png");

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

// const ParticlesSystem = (): JSX.Element => {
//   React.useEffect(() => {
//     const item = document.getElementById("tsparticles");
//     item.style.width = "100vw";
//     item.style.height = "100vh";
//   });
//
//   return (
//     <Particles
//       params={{
//         particles: {
//           number: {
//             value: 300,
//             density: {
//               enable: false,
//             },
//           },
//           size: {
//             value: 3,
//             random: true,
//             anim: {
//               speed: 4,
//               size_min: 0.3,
//             },
//           },
//           line_linked: {
//             enable: false,
//           },
//           move: {
//             random: true,
//             speed: 1,
//             direction: "top",
//             out_mode: "out",
//           },
//         },
//         interactivity: {
//           events: {
//             onhover: {
//               enable: true,
//               mode: "bubble",
//             },
//             onclick: {
//               enable: true,
//               mode: "repulse",
//             },
//           },
//           modes: {
//             bubble: {
//               distance: 250,
//               duration: 2,
//               size: 0,
//               opacity: 0,
//             },
//             repulse: {
//               distance: 400,
//               duration: 4,
//             },
//           },
//         },
//       }}
//     />
//   );
// };
//
export default ParticlesSystem;
