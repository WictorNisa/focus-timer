import { useState } from "react";
import type { MainProps } from "../../types/interfaces";
import styles from "./AddTask.module.css";

const AddTask: React.FC<MainProps> = ({ handleOnSubmit }) => {
  const [textInput, setTextInput] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };
  return (
    <div className={styles.taskContainer}>
      <form
        className={styles.taskForm}
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit(textInput);
          setTextInput("");
        }}
      >
        <label>What do you want to focus on? </label>
        <input
          type="text"
          value={textInput}
          onChange={(e) => handleOnChange(e)}
          placeholder="Add your task "
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTask;
