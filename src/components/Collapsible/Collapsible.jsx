import React, { useState } from "react";
import "./Collapsible.scss";
import PropTypes from "prop-types";

const Collapsible = (props) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="collapsible">
      <div
        className="collapsible-button"
        onClick={() => setShowDetail(!showDetail)}
      >
        <div className="title-collapsible">{props.title}</div>
        <i
          className={showDetail ? "fas fa-chevron-up" : "fas fa-chevron-down"}
          style={{}}
        ></i>
      </div>
      <div
        className="content"
        style={{
          display: showDetail ? "block" : "none",
        }}
      >
        <p>{props.description}</p>
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Collapsible;
