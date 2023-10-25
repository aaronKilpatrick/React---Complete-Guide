import React from 'react';

import styles from './Banner.module.scss';

import Card from '../UI/Card';

import heroImage from '../../assets/images/hero-image.jpg';

function Banner() {
  return (
    <section className={styles.banner}>
      <img src={heroImage} alt="Spread of menu items" />

      <div className={styles.container}>
        <Card className={styles.bannerMessage}>
          <h2>Delicious Food, Delivered To You</h2>
          <p>
            Choose your favourite meal from our broad selection of available
            meals and enjoy a delicious lunch or dunner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, to order, by
            experienced chefs!
          </p>
        </Card>
      </div>
    </section>
  );
}

export default Banner;
