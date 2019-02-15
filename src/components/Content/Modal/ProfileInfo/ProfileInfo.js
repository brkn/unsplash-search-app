import React, { Component } from "react";

import "./ProfileInfo.css";

class ProfileInfo extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="profile-info-wrapper">
        <img src={user.profile_image.medium} alt={user.username} />
        <div className="name">{user.name}</div>
        <a className="username" href={user.links.html}>@{user.username}</a>
      </div>
    );
  }
}

export default ProfileInfo;
