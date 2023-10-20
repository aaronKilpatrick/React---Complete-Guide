import React from 'react';

import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
const defaultProps = {
  className: null,
};

function Card({ className, children }) {
  return (
    <div className={`${styles.card} ${className}`}>{children}</div>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
