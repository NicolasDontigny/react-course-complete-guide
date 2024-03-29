import React from 'react';
import { useState } from 'react';
import User from './User';
import { Component } from 'react';

import classes from './Users.module.css';

export const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'Test',
    };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error('NOOOO users provided!');
    }
  }

  setShowUsers(show) {
    // this.state.showUsers = show;
  }

  toggleUsersHandler = () => {
    this.setState((curState) => ({ showUsers: !curState.showUsers }));
    // this.setShowUsers((curState) => !curState);
  };

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User
            key={user.id}
            name={user.name}
          />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

const Users1 = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User
          key={user.id}
          name={user.name}
        />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
