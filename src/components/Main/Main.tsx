import { useState } from "react";
import AddTask from "../AddTask/AddTask";
import styles from "./Main.module.css";
import Countdown from "../Countdown/Countdown";

const Main = () => {
  const [task, setTask] = useState<string>("");

  const handleOnSubmit = (input: string) => {
    if (input === "") {
      alert("Please enter a value");
    } else {
      setTask(input);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <AddTask handleOnSubmit={handleOnSubmit} />
      <Countdown task={task} />
    </div>
  );
};

export default Main;
