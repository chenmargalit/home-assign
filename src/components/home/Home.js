import React, { useState } from 'react';
import styles from './home.module.css';
import Card from '../card/Card';

import FormInput from '../formInput/FormInput';
import Footer from '../footer/footer';

import { validateEmail } from '../../utils/validation';

const womenImage = require('../../static/images/christina-wocintechchat-com-0hGVZGBnW7U-unsplash@2x.jpg');

const Home = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const onChangeValue = (e) => {
    setEmail(e.target.value);

    const isEmailValid = validateEmail(e.target.value);
    if (isEmailValid === false) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  };

  return (
    <div>
      <div className={styles.imageContainer}>
        <img src={womenImage} />
      </div>
      <h2 className={styles.heading}>A little bit about us and why we are about diversity</h2>
      <p className={styles.paragraph}>
        {/* move this to a constant in static folder */}
        At PayPal, our mission is to ignite opportunity by setting the world in motion. We see
        direct parallels between how we ignite opportunity through our company and how we ignite it
        within our company. But we also know that a solely data-driven approach will never be
        sufficient, because D&I is more than a box to check or a target to hit. The numbers matter,
        but they’re only a starting point; a commitment to diversity and inclusion has to run much
        deeper. That’s why we’ve set an audacious goal: to make Uber the most diverse, equitable,
        and inclusive workplace on the planet. And we’re not just setting high expectations for our
        own good. We’re aiming sky-high because we know from experience that reducing and
        eliminating inequity is hard to do if all you shoot for is incremental change.
      </p>
      <div className={styles.card}>
        <Card />
      </div>
      {/* should this really be h1 and the first headline h2 ?
      Its bigger, so it seems like it, but headline tags have serious SEO implications
       */}
      <h1 className={styles.secondaryHeadline}>
        Ready to accelerate your diversity recruiting efforts?
      </h1>
      <div>
        <FormInput value={email} onChangeValue={onChangeValue} error={error} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
