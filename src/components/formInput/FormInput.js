import React from 'react';
import styles from './formInput.module.css';

import Button from '../button/Button';
const FormInput = ({ value, onChangeValue, error }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder='Enter your work email'
          value={value}
          onChange={onChangeValue}
        />

        <Button />
      </div>
      <div className={styles.errorMessage}>{error ? 'Invalid email' : ''}</div>
    </div>
  );
};

export default FormInput;
