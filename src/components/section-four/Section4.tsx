import * as React from "react";
import { Button, Hidden } from "@mui/material";
import "./styles/section4.css";

const Section4 = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="section-four">
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <h2 className="s4-heading">Редактор презентаций</h2>
          <div className="s4-project-container">
            <iframe
              style={{ width: "100%", height: "100%", border: "none" }}
              src="https://mqxim.github.io/slides/"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section4;
