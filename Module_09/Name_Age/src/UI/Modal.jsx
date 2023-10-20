/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import PropTypes from 'prop-types';

import Button from './Button';
import Card from './Card';

import styles from './Modal.module.scss';

const propTypes = {
  errorInfo: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  onConfirm: PropTypes.func.isRequired,
};

function Modal({ errorInfo, onConfirm }) {
  return (
    <div className={styles.error} onClick={onConfirm}>
      <Card className={styles.modal}>
        <header>
          <h2>{errorInfo.errorHeading}</h2>
        </header>
        <div className={styles.content}>
          <p>{errorInfo.errorMessage}</p>
          <Button onClick={onConfirm}>Okay</Button>
        </div>
      </Card>
    </div>
  );
}

Modal.propTypes = propTypes;

export default Modal;
