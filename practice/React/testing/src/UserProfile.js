import React from 'react';

const UserProfile = (props) => (


  <div>
    <h1>User Profile</h1>
    <div>Name: {props.user.name}</div>
    <div>Email: {props.user.email}</div>
    {props.user.userNickname ? <div>Nickname: {props.user.userNickname}</div> : null}
  </div>
)

export default UserProfile;