import React from 'react';

import PropTypes from 'prop-types';

import styles from './CalculatorResults.module.css';

function CalculatorResults({ calculatedData }) {
  const audDollar = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  });

  if (calculatedData.length === 0) {
    return <p className={styles.result}>No investment calculated yet</p>;
  }

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedData.map((row) => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{audDollar.format(row.savingsEndOfYear)}</td>
            <td>{audDollar.format(row.yearlyInterest)}</td>
            <td>{audDollar.format(row.totalInterestEarned)}</td>
            <td>{audDollar.format(row.investedCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CalculatorResults.propTypes = {
  calculatedData: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number.isRequired,
      yearlyInterest: PropTypes.number.isRequired,
      savingsEndOfYear: PropTypes.number.isRequired,
      totalInterestEarned: PropTypes.number.isRequired,
      yearlyContribution: PropTypes.number.isRequired,
      investedCapital: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CalculatorResults;
