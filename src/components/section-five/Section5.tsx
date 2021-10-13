import * as React from "react";
import "./styles/section5.css";

const Section5 = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="section-five">
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <h2 className="s5-heading">Интерпретатор процедурного ЯП</h2>
          <div className="s5-project-container">
            <iframe
              style={{ width: "100%", height: "100%", border: "none" }}
              src="https://mqxim.github.io/compiler/"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section5;
