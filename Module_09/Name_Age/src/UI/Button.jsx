import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
const defaultProps = {
  onClick: null,
};

function Button({ onClick, children }) {
  return (
    <button
      className={styles.button}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
