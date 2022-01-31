import React from "react";
import "./Collapsible.scss";
const Collapsible = () => {
  return (
    <div className="collapsible">
      <div className="collapsible-button">
        <div className="title-collapsible">Collapsible</div>
        <i class="fas fa-chevron-up"></i>
      </div>
      <div className="content">
        <p>Lorem ipsum...</p>
      </div>
    </div>
  );
};

export default Collapsible;
