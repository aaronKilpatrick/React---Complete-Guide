/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import Button from './Button';
import Card from './Card';

import styles from './Modal.module.scss';

const propTypes = {
  errorInfo: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  onConfirm: PropTypes.func.isRequired,
};

function ErrorModal({ errorInfo, onConfirm }) {
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

function Modal({ errorInfo, onConfirm }) {
  return (
    <>
      {ReactDOM.createPortal(
        <ErrorModal errorInfo={errorInfo} onConfirm={onConfirm} />,
        document.getElementById('modal-root'),
      )}
    </>
  );
}

ErrorModal.propTypes = propTypes;
Modal.propTypes = propTypes;

export default Modal;
