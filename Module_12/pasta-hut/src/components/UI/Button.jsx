import React from 'react';

import styles from './Button.module.scss'

function Button({type, className, children}) {
  return(
    <button type={type} className={`${styles.button} ${className}`}>
      {children}
    </button>
  )
}

export default Button;