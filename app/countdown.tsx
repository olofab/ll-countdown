'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css'

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      milliseconds: '000',
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
        minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
        seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
        milliseconds: Math.floor(difference % 1000).toString().padStart(3, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 100); // Update interval set to 100 milliseconds for better performance

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={styles.countdown}>
            <div className={styles.countdowndigit}>{timeLeft.days}</div>
            <div className={styles.countdownseparator}>:</div>

      <div className={styles.countdowndigit}>{timeLeft.hours}</div>
      <div className={styles.countdownseparator}>:</div>
      <div className={styles.countdowndigit}>{timeLeft.minutes}</div>
      <div className={styles.countdownseparator}>:</div>
      <div className={styles.countdowndigit}>{timeLeft.seconds}</div>
    </div>
  );
};

export default CountdownTimer;
