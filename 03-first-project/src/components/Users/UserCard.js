import Card from '../UI/Card';
import React from 'react';

const UserCard = (props) => {
  return (
    <Card>
      {props.username} - {props.age} Years Old
    </Card>
  );
};

export default UserCard;
