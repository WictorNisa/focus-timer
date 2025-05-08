import CountdownClock from "../CountdownClock/CountdownClock";
import styles from "./Countdown.module.css";

interface Props {
  task: string;
}

const Countdown: React.FC<Props> = ({ task }) => {
  return (
    <div className={styles.countdownContainer}>
      {task && <h2>You are currently focusing on: {task}</h2>}

      <CountdownClock />
    </div>
  );
};

export default Countdown;
