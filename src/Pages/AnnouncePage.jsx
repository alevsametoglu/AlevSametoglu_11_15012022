import React from "react";
import Collapsible from "../components/Collapsible/Collapsible";
import Slider from "../components/Slider/Slider";
import "./AnnouncePage.scss";
const AnnouncePage = () => {
  return (
    <div className="announce-page">
      <Slider />
      <div className="announce-collapsible">
        <Collapsible />
        <Collapsible />
      </div>
    </div>
  );
};

export default AnnouncePage;
