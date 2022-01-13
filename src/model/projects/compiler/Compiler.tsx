import * as React from "react";

const Dark1 = require("./dark[1].png");
const Dark2 = require("./dark[2].png");
const Dark3 = require("./dark[3].png");
const Light1 = require("./light[1].png");
const Light2 = require("./light[2].png");
const Light3 = require("./light[3].png");

export default {
  id: "simple-compiler",
  name: "Simple Compiler / Интерпретатор языка программирования",
  description:
    "Интерпретатор собственного языка программирования и редактор грамматики для языка программирования. ",
  url: "https://mqxim.github.io/compiler/",
  images: {
    dark: [Dark1.default, Dark2.default, Dark3.default],
    light: [Light1.default, Light2.default, Light3.default],
  },
  article: {
    heading: "Simple Compiler / Интерпретатор языка программирования",
    blocks: [
      {
        type: "text",
        heading: "Описание проекта",
        text: (
          <div>
            <div style={{ marginBottom: 8 }}>
              Проект &quot;Simple Compiler&quot; дает возможность написать
              программу на языке программирования, разработанном мной. Можно
              написать программу в редакторе прямо в браузере, после чего
              запустить ее. Если программа &quot;правильная&quot;, то она
              запустится и покажется результат, а иначе покажутся ошибки
              компиляции. Также после запуска программы будут показываться
              токены и дерево синтаксического разбора, что облегчит студентам
              понимание работы компиляторов.
            </div>
            <div style={{ marginBottom: 16 }}>
              Еще одна возможность проекта — это создание и тестирование своей
              собственной грамматики для языка программирования. Этот функцонал
              проекта помогает студентам-программистам в написании своего
              собственного языка на курсе &quot;Теория языков
              программирования&quot;.
            </div>
            <div style={{ marginBottom: 8 }}>
              <a href="https://mqxim.github.io/compiler/" target="__blank">
                Посмотреть проект
              </a>
            </div>
          </div>
        ),
      },
      {
        type: "image_carousel",
        heading: "Фотографии проекта",
        light: [Light1.default, Light2.default, Light3.default],
        dark: [Dark1.default, Dark2.default, Dark3.default],
      },
    ],
  },
};
