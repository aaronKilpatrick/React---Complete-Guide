import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CalculatorFormActions from '../CalculatorFormActions/CalculatorFormActions';
import CalculatorFormInput from '../CalculatorFormInput/CalculatorFormInput';
import styles from './CalculatorForm.module.css';

function CalculatorForm({ calculateHandler, resetResults }) {
  const [savings, setSavings] = useState('');
  const [contribution, setContribution] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');

  const savingsChangeHandler = (event) => {
    setSavings(event.target.value);
  };

  const contributionChangeHandler = (event) => {
    setContribution(event.target.value);
  };

  const expectedReturnChangeHandler = (event) => {
    setExpectedReturn(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      'current-savings': savings,
      'yearly-contribution': contribution,
      'expected-return': expectedReturn,
      duration: duration,
    };

    calculateHandler(userInput);
  };

  const resetHandler = () => {
    setSavings('');
    setContribution('');
    setDuration('');
    setExpectedReturn('');

    resetResults();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <CalculatorFormInput
          idName="current-savings"
          labelText="Current Savings ($)"
          onChangeHandler={savingsChangeHandler}
          value={savings}
        />
        <CalculatorFormInput
          idName="yearly-contribution"
          labelText="Yearly Savings ($)"
          onChangeHandler={contributionChangeHandler}
          value={contribution}
        />
      </div>
      <div className={styles['input-group']}>
        <CalculatorFormInput
          idName="expected-return"
          labelText="Expected Interest (%, per year)"
          onChangeHandler={expectedReturnChangeHandler}
          value={expectedReturn}
        />
        <CalculatorFormInput
          idName="duration"
          labelText="Investment Duration (years)"
          onChangeHandler={durationChangeHandler}
          value={duration}
        />
      </div>
      <CalculatorFormActions reset={resetHandler} />
    </form>
  );
}

CalculatorForm.propTypes = {
  calculateHandler: PropTypes.func.isRequired,
  resetResults: PropTypes.func.isRequired,
};

export default CalculatorForm;
