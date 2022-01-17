import * as React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";

const rootEl = document.getElementById("root");

render(
  <BrowserRouter basename="/portfolio">
    <App />
  </BrowserRouter>,
  rootEl,
);
