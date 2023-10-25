import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import styles from './Header.module.scss';

function Header({ onOpenCart }) {
  return (
    <header>
      <div className={styles.container}>
        <h1>PastaHut</h1>
        <button
          className={styles.cart}
          onClick={onOpenCart}
        >
          <span className={styles.cart__icon}>
            <FaShoppingCart />
          </span>
          <span className={styles.cart__qty}>0</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
