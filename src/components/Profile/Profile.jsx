import React from "react";
import Rating from "../Rating/Rating";
import PropTypes from "prop-types";
import "./Profile.scss";

export const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile-info">
        <div className="profile-name">{props.name}</div>
        <div className="profile-img">
          <img src={props.url} alt="profil" />
        </div>
      </div>
      <div className="stars">
        <Rating value={3} />
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};
export default Profile;
