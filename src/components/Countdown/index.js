import { useState, useEffect } from 'react';
import styles from './Countdown.module.css'

const CountdownTimer = () => {
  const initialTime = 7 * 24 * 60 * 60; // 7 dias em segundos
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => Math.max(0, prevTime - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(remainingTime / (24 * 60 * 60));
  const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
  const seconds = remainingTime % 60;

  return (
    <div className={ styles.countdown }>
      <div>
        <p>{days}</p>
        <span>DIAS</span>
      </div>
      <div>
        <p>{hours}</p>
        <span>HRS</span>
      </div>
      <div>
        <p>{minutes}</p>
        <span>MIN</span>
      </div>
      <div>
        <p>{seconds}</p>
        <span>SEG</span>
      </div>
    </div>
  );
};

export default CountdownTimer;