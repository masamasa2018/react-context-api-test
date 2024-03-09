import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = () => {
  // コンテキストを使用してユーザー情報を取得
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserProfile;
