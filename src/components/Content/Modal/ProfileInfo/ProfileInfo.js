import React, { Component } from "react";

import "./ProfileInfo.css";

class ProfileInfo extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="profile-wrapper">
        <img className="profile-image" src={user.profile_image.medium} alt={user.username} />
        <div className="profile-name">{user.name}</div>
        <a className="profile-username" href={user.links.html}>@{user.username}</a>
      </div>
    );
  }
}

export default ProfileInfo;
