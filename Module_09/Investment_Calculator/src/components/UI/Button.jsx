import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.css';

function Button({ buttonType, buttonClass, buttonText, onClickHandler }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={buttonType}
      className={styles[`${buttonClass}`]}
      onClick={onClickHandler}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
};

Button.defaultProps = { onClickHandler: null };

export default Button;
