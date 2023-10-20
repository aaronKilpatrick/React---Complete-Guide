import React, { useState } from 'react';

import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import Card from '../UI/Card';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

import styles from './AddUser.module.scss';

const propTypes = {
  addNewUser: PropTypes.func.isRequired,
};

function AddUser({ addNewUser }) {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  /*
  *   Validation Functions
  */
  // Inputs must have values
  const areInputsEmpty = () => userName.trim().length === 0 || age.length === 0;

  /*
  *   Event Handler Functions
  */
  const userNameChangeHandler = (event) => setUserName(event.target.value);
  const ageChangeHandler = (event) => setAge(+event.target.value);
  const errorHandler = () => setError(null);

  const onSubmit = (event) => {
    event.preventDefault();

    if (areInputsEmpty()) {
      setError({
        errorHeading: 'Invalid Input',
        errorMessage: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (age <= 0) {
      setError({
        errorHeading: 'Invalid Age',
        errorMessage: 'Please enter a valid age (>0).',
      });
      return;
    }

    const userData = {
      userName,
      age,
      key: uniqid('user-'),
    };

    addNewUser(userData);

    setUserName('');
    setAge('');
  };

  return (
    <div>
      {error && (
        <Modal
          errorInfo={error}
          onConfirm={errorHandler}
        />
      )}

      <Card className={styles.addUser}>
        <form onSubmit={onSubmit}>
          <label htmlFor="userName">
            Username
            <input
              type="text"
              name="age"
              id="userName"
              value={userName}
              onChange={userNameChangeHandler}
            />
          </label>
          <label htmlFor="age">
            Age (Years)
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={ageChangeHandler}
            />
          </label>
          <Button>Add User</Button>
        </form>
      </Card>
    </div>
  );
}

AddUser.propTypes = propTypes;

export default AddUser;
