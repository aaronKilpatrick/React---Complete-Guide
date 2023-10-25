import React, { useRef, useState } from 'react';

import styles from './MenuItemForm.module.scss';

import Button from '../UI/Button';
import Input from '../UI/Input';

function MenuItemForm() {
  const [isInputQtyValid, setInputQtyValid] = useState(false);
  const inputQtyRef = useRef();

  return (
    <form>
        <Input
          ref={inputQtyRef}
          label="Amount"
          id="menu-item-1"
          type="number"
          min="1"
          max="5"
          defaultValue="1"
        />
        <Button type="submit" className={styles['add-to-cart']}>
          Add
        </Button>
      </form>
  );
}

export default MenuItemForm;