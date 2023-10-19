import React from 'react';

import PropTypes from 'prop-types';

function CalculatorFormInput({
  idName, labelText, onChangeHandler, value,
}) {
  return (
    <p>
      <label htmlFor={idName}>
        {labelText}
        <input
          type="number"
          id={idName}
          value={value}
          onChange={onChangeHandler}
        />
      </label>
    </p>
  );
}

CalculatorFormInput.propTypes = {
  idName: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CalculatorFormInput;
