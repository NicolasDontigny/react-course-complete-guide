import React from 'react';
import UserCard from './UserCard';
import styles from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <li className={styles['users-list']}>
      {props.users.map((user) => (
        <UserCard
          key={user.id}
          username={user.username}
          age={user.age}
        ></UserCard>
      ))}
    </li>
  );
};

export default UsersList;
