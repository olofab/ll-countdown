import React from 'react';
import styles from '../app/page.module.css'
import CountdownTimer from '../app/countdown';

const Home: React.FC = () => {
  const targetDate = new Date('2024-03-04T04:00:00'); // Set your target date and time

  return (

<div>
      <CountdownTimer targetDate={targetDate} />
      <img src='./asics_logo.png' className={styles.logo}/>
    </div>
   
  );
};

export default Home;
