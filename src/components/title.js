import React, { forwardRef } from "react";

import styles from "./styles.module.css";

export default forwardRef(function Title({ title }, ref) {
  return (
    <div ref={ref} className="row row-collapse align-equal align-center">
      <div className="col medium-3 small-1 large-3">
        <div className="col-inner" />
      </div>
      <div className="col medium-6 small-10 large-6">
        <div className="col-inner">
          <div className="container section-title-container mt-4">
            <h3
              className={`section-title section-title-center font-bold ${styles["section-title-center"]}`}
            >
              <b />
              <span className="section-title-main">{title}</span>
              <b />
              <i className="icon-angle-right" />
            </h3>
          </div>
        </div>
      </div>
      <div className="col medium-3 small-1 large-3">
        <div className="col-inner" />
      </div>
    </div>
  );
})
