import { useEffect, useState } from "react";
import styles from "./CountdownClock.module.css";

const CountdownClock = () => {
  const initialTime: number = 25 * 60;
  const [seconds, setSeconds] = useState<number>(initialTime);
  const [isActive, setIsActive] = useState<boolean>(false);

  const resetTimer = () => {
    setSeconds(initialTime);
    setIsActive(false);
  };

  const toggleTimer = () => {
    setIsActive((prev) => !prev);
  };

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, seconds]);

  return (
    <div className={styles.clockContainer}>
      <h1>Countdown timer: </h1>
      <h2>{formatTime(seconds)}</h2>
      <div className={styles.buttonContainer}>
        <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      {seconds === 0 ? <p>"Time’s up. Did you do the thing?"</p> : ""}
    </div>
  );
};

export default CountdownClock;
