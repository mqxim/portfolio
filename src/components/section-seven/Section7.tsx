import * as React from "react";

import "./styles/section7.css";

const Section7 = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="section-seven">
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <h2 className="s7-heading">Анализатор качества сайтов</h2>
          <div className="s7-project-container"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section7;
