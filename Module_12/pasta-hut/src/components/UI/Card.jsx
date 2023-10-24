import React from 'react';

import styles from './Card.module.scss';

function Card({className, children}) {
  return (
    <article className={`${styles.card} ${className}`}>
      {children}
    </article>
  );
}

export default Card;