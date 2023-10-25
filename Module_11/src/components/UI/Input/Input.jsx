import React, { useRef, useImperativeHandle } from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((
  { label, type, id, isValid, value, changeHandler, onBlur, isPassword },
  ref,
) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  const inputClass = `${styles.control} ${
    isValid === false ? styles.invalid : ''
  }`;

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div className={inputClass}>
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={changeHandler}
        onBlur={onBlur}
        autoComplete={isPassword ? 'current-password' : ''}
      />
    </div>
  );
});

export default Input;
