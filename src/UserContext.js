import React, { createContext, useState } from 'react';

// コンテキストを作成し、デフォルトの値を指定
const UserContext = createContext();

const UserProvider = ({ children }) => {
  // ユーザー情報の状態を管理
  const [user, setUser] = useState({ name: '', age: 0 });

  // ユーザー情報を更新する関数
  const updateUser = (name, age) => {
    setUser({ name, age });
  };

  // コンテキストプロバイダーを返す
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
