/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import Header from './components/Header/Header';
import CalculatorForm from './components/Calculator/CalculatorForm/CalculatorForm';
import CalculatorResults from './components/Calculator/CalculatorResults/CalculatorResults';

function App() {
  const [calculatedData, setCalculatedData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results

    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput.duration;
    let currentSavings = +userInput['current-savings'];
    let totalInterest = 0;
    let investedCapital = +userInput['current-savings'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i += 1) {
      const yearlyInterest = currentSavings * expectedReturn;

      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      investedCapital += yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterestEarned: totalInterest,
        yearlyContribution: yearlyContribution,
        investedCapital: investedCapital,
      });
    }

    setCalculatedData(yearlyData);
  };

  const clearResultsHandler = () => {
    setCalculatedData([]);
  };

  return (
    <div>
      <Header />
      <CalculatorForm
        calculateHandler={calculateHandler}
        resetResults={clearResultsHandler}
      />

      <CalculatorResults calculatedData={calculatedData} />
    </div>
  );
}

export default App;
