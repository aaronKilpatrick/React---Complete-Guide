import React from 'react';

import styles from './MenuItem.module.scss';

import Button from './UI/Button';

function Menu({ heading, description, price }) {
  const dollar = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <li className={styles['menu-item']}>
      <div className={styles['menu-item__info-container']}>
        <h3 className={styles['menu-item__heading']}>{heading}</h3>
        <p className={styles['menu-item__description']}>{description}</p>
        <p className={styles['menu-item__price']}>
          {dollar.format(price)}
        </p>
      </div>
      <div className={styles['menu-item__add-container']}>
        <div>
          <label htmlFor="menu-item-1">Amount</label>
          <input type="number" id="menu-item-1" min="1" max="99" />
        </div>
        <Button type="button" className={styles['add-to-cart']}>
          Add
        </Button>
      </div>
    </li>
  );
}

export default Menu;
