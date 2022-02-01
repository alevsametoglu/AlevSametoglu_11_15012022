import React from "react";
import "./AboutPage.scss";

import { Banner, Collapsible } from "../components";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-banner">
        <Banner />
      </div>
      <div className="about-collapsible">
        <Collapsible />
        <Collapsible />
        <Collapsible />
        <Collapsible />
      </div>
    </div>
  );
};

export default AboutPage;
