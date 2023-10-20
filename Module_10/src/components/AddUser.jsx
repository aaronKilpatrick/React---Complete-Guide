import React, { useState, useRef } from 'react';

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
  const userNameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const errorHandler = () => setError(null);

  const onSubmit = (event) => {
    event.preventDefault();

    const userName = userNameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (userName.trim().length === 0 || age.length === 0) {
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
    userNameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <>
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
              ref={userNameInputRef}
            />
          </label>
          <label htmlFor="age">
            Age (Years)
            <input
              type="number"
              name="age"
              id="age"
              ref={ageInputRef}
            />
          </label>
          <Button>Add User</Button>
        </form>
      </Card>
    </>
  );
}

AddUser.propTypes = propTypes;

export default AddUser;
