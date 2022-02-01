import React from "react";
import { Host, Slider, Collapsible } from "../components";
import "./AnnouncePage.scss";
const AnnouncePage = () => {
  return (
    <div className="announce-page">
      <Slider url="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg" />
      <div className="announce-infos">
        <Host title="Appartement cosy" location="Ile de France - Paris 17e" />
      </div>
      <div className="announce-collapsible">
        <Collapsible title="Description" description="lorem ipsum....." />
        <Collapsible title="Équipements" description="lorem ipsum....." />
      </div>
    </div>
  );
};

export default AnnouncePage;
