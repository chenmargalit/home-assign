import React from 'react';
import styles from './Card.module.css';

import Chart from '../chart/Chart';

const Card = () => {

  return (
    <div className={styles.container}>
      <div className={styles.cardBox}>
        <h1>Representation at PayPal</h1>
        <p>
          Display the representation across your organization, from race and gender, to pride and
          service.
        </p>
        <Chart />
      </div>
    </div>
  );
};

export default Card;
