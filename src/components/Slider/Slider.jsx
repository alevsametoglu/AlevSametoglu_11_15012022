import React from "react";
import "./Slider.scss";

const Slider = (props) => {
  return (
    <div
      className="slider"
      style={{
        backgroundImage: `
        url(${props.url})`,
      }}
    >
      <div className="icon-navigation">
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-right"></i>
      </div>
      <div className="slider-no">
        <p>1/5</p>
      </div>
    </div>
  );
};
export default Slider;
