'use client';

import React from 'react';
import CountdownTimer from './countdown';
import styles from './page.module.css'

const Home: React.FC = () => {
  const targetDate = new Date('2024-03-01T08:00:00'); // Set your target date and time

  return (
    <div>
      <CountdownTimer targetDate={targetDate} />
      <img src='./Asics_Logo.svg' className={styles.logo}/>
    </div>
  );
};

export default Home;
