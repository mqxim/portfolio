import * as React from "react";

const Dark1 = require("./dark[1].png");
const Dark2 = require("./dark[2].png");
const Dark3 = require("./dark[3].png");
const Dark4 = require("./dark[4].png");
const Dark5 = require("./dark[5].png");
const Dark6 = require("./dark[6].png");
const Dark7 = require("./dark[7].png");
const Dark8 = require("./dark[8].png");
const Dark9 = require("./dark[9].png");
const Light1 = require("./light[1].png");
const Light2 = require("./light[2].png");
const Light3 = require("./light[3].png");
const Light4 = require("./light[4].png");
const Light5 = require("./light[5].png");
const Light6 = require("./light[6].png");
const Light7 = require("./light[7].png");
const Light8 = require("./light[8].png");
const Light9 = require("./light[9].png");

export default {
  id: "performance-testing",
  name: "AJ Performance / Тестирование веб-приложений",
  description:
    "Сервис для тестирования производительности, качества и мониторинга ошибок веб-приложений.",
  url: "",
  images: {
    dark: [
      Dark1.default,
      Dark2.default,
      Dark3.default,
      Dark4.default,
      Dark5.default,
      Dark6.default,
      Dark7.default,
      Dark8.default,
      Dark9.default,
    ],
    light: [
      Light1.default,
      Light2.default,
      Light3.default,
      Light4.default,
      Light5.default,
      Light6.default,
      Light7.default,
      Light8.default,
      Light9.default,
    ],
  },
  article: {
    heading: "AJ Performance / Тестирование веб-приложений",
    blocks: [
      {
        type: "text",
        heading: "Описание проекта",
        text: (
          <div>
            <div style={{ marginBottom: 8 }}>
              По мере развития одной компании появилось большое количество
              веб-приложений, которые нуждаются в постоянной проверке
              работоспособности в онлайн режиме, в тестировании имеющегося
              функционала по заданным критериям. Как руководителям, так
              менеджерам и разработчиками нужен был сервис, помогающий
              отслеживать ошибки и мониторить производительность и качество
              приложений в онлайн-режиме. Поэтому было необходимо разработать
              платформу, которая позволит проводить тестирование
              приложений, систематизирует имеющиеся знания об ошибках и
              привнесет новые методы тестирования приложений.
            </div>
          </div>
        ),
      },
      {
        type: "image_carousel",
        heading: "Фотографии проекта",
        light: [
          Light1.default,
          Light2.default,
          Light3.default,
          Light4.default,
          Light5.default,
          Light6.default,
          Light7.default,
          Light8.default,
          Light9.default,
        ],
        dark: [
          Dark1.default,
          Dark2.default,
          Dark3.default,
          Dark4.default,
          Dark5.default,
          Dark6.default,
          Dark7.default,
          Dark8.default,
          Dark9.default,
        ],
      },
    ],
  },
};
