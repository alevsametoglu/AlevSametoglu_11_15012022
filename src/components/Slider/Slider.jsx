import React, { useState } from "react";
import "./Slider.scss";

const Slider = (props) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div
      className="slider"
      style={{
        backgroundImage: `
        url(${props.images[imageIndex]})`,
      }}
    >
      {props.images.length > 1 && (
        <div className="icon-navigation">
          <i
            className="fas fa-chevron-left"
            onClick={() =>
              setImageIndex(
                imageIndex > 0 ? imageIndex - 1 : props.images.length - 1
              )
            }
          ></i>
          <i
            className="fas fa-chevron-right"
            onClick={() =>
              setImageIndex(
                imageIndex < props.images.length - 1 ? imageIndex + 1 : 0
              )
            }
          ></i>
        </div>
      )}
      {props.images.length > 1 && (
        <div className="slider-no">
          <p>
            {imageIndex + 1}/{props.images.length}
          </p>
        </div>
      )}
    </div>
  );
};
export default Slider;
