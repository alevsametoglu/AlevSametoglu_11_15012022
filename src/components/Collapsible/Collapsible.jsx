import React from "react";
import "./Collapsible.scss";
import PropTypes from "prop-types";
const Collapsible = (props) => {
  return (
    <div className="collapsible">
      <div className="collapsible-button">
        <div className="title-collapsible">{props.title}</div>
        <i className="fas fa-chevron-up"></i>
      </div>
      <div className="content">
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
