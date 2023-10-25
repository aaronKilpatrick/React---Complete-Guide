import React from 'react';

import styles from './Menu.module.scss';

import Card from '../UI/Card';
import MenuItem from './MenuItem';

const MENU = [
  {
    heading: 'Carbonara',
    description: 'Smoky bacon with leek & garlic crème fraiche',
    price: 23.0,
    key: 'carb',
  },
  {
    heading: 'Basil Pesto Di Genovese',
    description: 'Basil Pesto Di Genovese',
    price: 22.25,
    key: 'basil'
  },
  {
    heading: 'Margherita Pizza',
    description: 'With San Marzano Tomato, fresh mozzarella and basil',
    price: 21.25,
    key: 'pizza'
  },
  {
    heading: 'Two Cheese Garlic Bread',
    description:
      'Crusty ciabatta, garlic butter, melted mozzarella & Parmesan (Serves two)',
    price: 13.0,
    key: 'bread'
  },
];

function Menu() {
  const mealList = MENU.map((item) => (
    <MenuItem
      heading={item.heading}
      description={item.description}
      price={item.price}
      key={item.key}
    />
  ))
  return (
    <div className={styles.container}>
      <Card className={styles.menu}>
        <ul>
          {mealList}
        </ul>
      </Card>
    </div>
  );
}

export default Menu;
