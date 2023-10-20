import React from 'react';

import PropTypes from 'prop-types';

import Card from '../UI/Card';

import styles from './UserList.module.scss';

const propTypes = {
  usersList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

function UserList({ usersList }) {
  return (
    <Card className={styles.userList}>
      <ul>
        {usersList.map((user) => (
          <li key={user.key}>
            {`${user.userName} (${user.age} years old)`}
          </li>
        ))}
      </ul>
    </Card>
  );
}

UserList.propTypes = propTypes;

export default UserList;
