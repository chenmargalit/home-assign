import React from 'react';
import styles from './footer.module.css';

import FB from '../../../src/static/images/Group 7128.svg';
import Linkedin from '../../../src/static/images/Group 7129.svg';
import Logo from '../../../src/static/images/joonko logo copy.svg';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <a className={styles.logo} href='https://joonko.co/' target='_blank'>
          <img className={styles.logo} src={Logo} />
        </a>
      </div>

      <div>
        <a className={styles.fb} href='https://www.facebook.com/JoonkoHQ' target='_blank'>
          <img src={FB} />
        </a>
      </div>
      <div>
        <a
          className={styles.linkedin}
          href='https://www.linkedin.com/company/joonkohq'
          target='_blank'
        >
          <img src={Linkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
