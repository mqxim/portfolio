import * as React from "react";

const Image1 = require("./1.png");
const Image2 = require("./2.png");
const Image3 = require("./3.png");
const Image4 = require("./4.png");
const Image5 = require("./5.png");
const Image6 = require("./6.png");
const Image7 = require("./7.png");

export default {
  id: "slides",
  name: "Slides Editor / Редактор презентаций",
  description: "Редактор слайдов прямо в браузере.",
  url: "https://mqxim.github.io/slides/",
  images: {
    dark: [],
    light: [
      Image1.default,
      Image2.default,
      Image3.default,
      Image4.default,
      Image5.default,
      Image6.default,
      Image7.default,
    ],
  },
  article: {
    heading: "Slides Editor / Редактор презентаций",
    blocks: [
      {
        type: "text",
        heading: "Описание проекта",
        text: (
          <div>
            <div style={{ marginBottom: 16 }}>
              Проект &quot;Slides Editor&quot; представляет собой редактор
              презентаций. Сейчас в нем имеется возможность добавлять фигуры,
              картинки, тексты и менять их рамзеры, цвета, положение в
              презентации, а также есть возможность создавать слайды, менять
              слои местами, отменять и повторять действия.
            </div>
            <div style={{ marginBottom: 8 }}>
              <a href="https://mqxim.github.io/slides/" target="__blank">
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
    ],
  },
};
