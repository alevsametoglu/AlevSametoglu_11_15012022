import React from "react";
import "./Slider.scss";

const Slider = () => {
  return (
    <div
      className="slider"
      style={{
        backgroundImage: `
        url("./assets/images/Banner.svg")`,
      }}
    >
      <div className="icon-navigation">
        <i class="fas fa-chevron-left"></i>
        <i class="fas fa-chevron-right"></i>
      </div>
      <p className="slider-no">1/5</p>
    </div>
  );
};
export default Slider;
