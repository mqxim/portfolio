import * as React from "react";

const Image1 = require("./1.png");
const Image2 = require("./2.png");
const Image3 = require("./3.png");
const Image4 = require("./4.png");
const Image5 = require("./5.png");
const Image6 = require("./6.png");
const Image7 = require("./7.png");

export default {
  id: "money-care",
  name: "Money Care / Учёт доходов и расходов",
  description:
    "Сервис учета доходов и расходов. Позволяет систематизировать и анализировать ваши траты.",
  url: "https://mqxim.github.io/money-care/",
  images: {
    dark: [],
    light: [
      Image2.default,
      Image1.default,
      Image3.default,
      Image4.default,
      Image5.default,
      Image6.default,
      Image7.default,
    ],
  },
  article: {
    heading: "Money Care / Учёт доходов и расходов",
    blocks: [
      {
        type: "text",
        heading: "Описание проекта",
        text: (
          <div>
            <div style={{ marginBottom: 16 }}>
              Проект &quot;Money Care&quot; дает вам возможность записывать
              доходы и расходы, чтобы в дальнейшем анализировать и
              оптимизировать их. Приложение позволяет создавать раздельные счета
              с разными валютами, просматривать транзакции за разные периоды
              времени, сортировать их по значимости.
            </div>
            <div style={{ marginBottom: 8 }}>
              <a href="https://mqxim.github.io/money-care/" target="__blank">
                Посмотреть проект
              </a>
            </div>
          </div>
        ),
      },
      {
        type: "image_carousel",
        heading: "Фотографии проекта",
        light: [
          Image1.default,
          Image2.default,
          Image3.default,
          Image4.default,
          Image5.default,
          Image6.default,
          Image7.default,
        ],
        dark: [],
      },
      {
        type: "text",
        heading: "Интерактивная версия",
        text: (
          <div style={{ width: "100%", height: "90vh" }}>
            <iframe
              style={{ width: "100%", height: "100%", border: "none" }}
              src="https://mqxim.github.io/money-care/"
            />
          </div>
        ),
      },
    ],
  },
};
