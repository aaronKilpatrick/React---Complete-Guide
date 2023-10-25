import React from 'react';

import styles from './MenuItem.module.scss';

import MenuItemForm from './MenuItemForm';

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
      <MenuItemForm />
    </li>
  );
}

export default Menu;
