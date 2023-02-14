import React, { useState } from 'react';
import AddUser from './AddUser';
import UsersList from './UsersList';

const USERS = [{ id: '1234', username: 'Boston Rob', age: 24 }];

const Users = (props) => {
  const [users, setUsers] = useState(USERS);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={users}></UsersList>
    </div>
  );
};

export default Users;
