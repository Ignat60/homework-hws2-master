import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./Greeting.module.css";
import Button from "@mui/material/Button";

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  onBlur: () => void;
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  error: string;
  totalUsers: number; // need to fix any
  lastUserName: string; // need to fix any
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {
    name,
    setNameCallback,
    addUser,
    onEnter,
    onBlur,
    error,
    totalUsers,
    lastUserName,
  } // деструктуризация пропсов
) => {
  // const inputClass =  s.errorInput; // need to fix with (?:)
  let inputClass = error ? s.errorInput : ""; // need to fix with (?:)

  const styles = {
    maxWidth: "40px",
    maxHeight: "20px",
    minWidth: "40px",
    minHeight: "20px",
    backgroundColor: "#0077ff",
    marginLeft: "10px",
  };

  return (
    <div id={"hw3-form"} className={s.greetingForm}>
      <div className={s.text}>
        {"Людей добавили: "}
        <span id={"hw3-users-total"}>{totalUsers}</span>
      </div>

      <div className={s.inputAndButtonContainer}>
        <div>
          <input
            id={"hw3-input"}
            value={name}
            onChange={setNameCallback}
            className={inputClass}
            onKeyDown={onEnter}
            onBlur={onBlur}
          />
          <div id={"hw3-error"} className={s.error}>
            {error}
          </div>
        </div>
        <Button
          variant="contained"
          id={"hw3-button"}
          onClick={addUser}
          className={s.button}
          disabled={!name.trim()}
          style={styles}
          color="primary"
        >
          add
        </Button>
        {/* <button
          id={"hw3-button"}
          onClick={addUser}
          className={s.button}
          disabled={!name.trim()}
        >
          add
        </button> */}
      </div>

      {lastUserName && (
        <div className={s.greeting}>
          Привет <span id={"hw3-last-user"}>{lastUserName}</span>!
        </div>
      )}
    </div>
  );
};

export default Greeting;
