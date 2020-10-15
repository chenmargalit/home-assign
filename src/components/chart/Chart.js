import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import styles from './chat.module.css';

const Chart = () => {
  const [femalePercent, setFemalePercent] = useState(50);
  const [malePercent, setMalePercent] = useState(40);
  const [sumPercents, setSumPercents] = useState(0);
  const [error, setError] = useState('');

  const changeGenderPercent = (gender, amount) => {
    setError('');

    if (amount > 100 || amount < 0) {
      return setError('invalid input');
    }

    if (gender === 'female') {
      setFemalePercent(amount);
    } else {
      setMalePercent(amount);
    }
  };

  return (
    <div className={styles.circleContainer}>
      <div className={styles.circle}>
        <PieChart
          lineWidth={10}
          startAngle={90}
          paddingAngle={5}
          totalValue={100}
          data={[
            { title: 'Female', value: femalePercent, color: '#FFA52E' },
            { title: 'Male', value: malePercent, color: '#7B3FF2' },
          ]}
        />
      </div>
      {/* this needs to move to his own component */}
      <div className={styles.inputsContainer}>
        <div>
          <input
            className={styles.input}
            type='number'
            value={femalePercent}
            onChange={(e) => changeGenderPercent('female', e.target.value)}
          />

          <span className={`${styles.inputTag} ${styles.female}`}>
            <span className={styles.percentSign}>% </span>
            Female
          </span>
          <p className={styles.error}>{error ? error : ''}</p>
        </div>
        <div className={styles.secondInputContainer}>
          <input
            className={styles.input}
            type='number'
            value={malePercent}
            onChange={(e) => changeGenderPercent('male', e.target.value)}
          />
          <span className={`${styles.inputTag} ${styles.male}`}>
            <span className={styles.percentSign}>% </span>
            Male
          </span>
          <p className={styles.error}>{error ? error : ''}</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
