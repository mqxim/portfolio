import * as React from "react";
import "./styles/section6.css";

const Section6 = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="section-six">
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <h2 className="s6-heading">Учет доходов и расходов</h2>
          <div className="s6-project-container">
            <iframe
              style={{ width: "100%", height: "100%", border: "none" }}
              src="https://mqxim.github.io/money-care/"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section6;
