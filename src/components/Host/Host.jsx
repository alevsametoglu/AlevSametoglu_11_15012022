import React from "react";
import "./Host.scss";
import { Tag, Profile } from "..";
import PropTypes from "prop-types";

const Host = (props) => {
  return (
    <div className="detail">
      <div className="info">
        <div className="title">{props.title}</div>
        <div className="location">{props.location}</div>
        <div className="tags">
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
      <div>
        <Profile
          name="Nathalie Jean"
          url="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
        />
      </div>
    </div>
  );
};
Host.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
};
export default Host;
