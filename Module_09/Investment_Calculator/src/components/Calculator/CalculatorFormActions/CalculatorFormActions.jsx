import React from 'react';

import PropTypes from 'prop-types';

import styles from './CalculatorFormActions.module.css';

import Button from '../../UI/Button';

function CalculatorFormActions({ reset }) {
  return (
    <p className={styles.actions}>
      <Button
        buttonType="reset"
        buttonClass="buttonAlt"
        buttonText="Reset"
        onClickHandler={reset}
      />
      <Button buttonType="submit" buttonClass="button" buttonText="Calculate" />
    </p>
  );
}
CalculatorFormActions.propTypes = { reset: PropTypes.func.isRequired };

export default CalculatorFormActions;
