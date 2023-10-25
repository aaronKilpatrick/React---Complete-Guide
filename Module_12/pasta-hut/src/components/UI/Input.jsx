import React from 'react';

import './Input.module.scss';

const Input = React.forwardRef(({ label, id, type, min, max, defaultValue }, ref) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        type={type}
        id={id}
        min={min}
        max={max}
        defaultValue={defaultValue}
      />
    </div>
  );
});

export default Input;
