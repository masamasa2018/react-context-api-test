import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const UserUpdate = () => {
  // コンテキストを使用してユーザー情報と更新関数を取得
  const { user, updateUser } = useContext(UserContext);
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');

  const handleUpdate = () => {
    updateUser(nameInput, parseInt(ageInput, 10));
  };

  return (
    <div>
      <h2>Update User</h2>
      <div>
        <label>Name: </label>
        <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" value={ageInput} onChange={(e) => setAgeInput(e.target.value)} />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UserUpdate;
