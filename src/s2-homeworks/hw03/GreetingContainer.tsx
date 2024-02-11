import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";
import { error } from "console";

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};
export const pureAddUser = (
  name: string,
  setError: (errorMessage: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void
) => {
  if (name.trim() === "") {
    setError("Ошибка! Введите имя!");
  } else {
    console.log(name);

    setName(name);
    addUserCallback(name);
    setName("");
  }
};

export const pureOnBlur = (
  name: string,
  setError: (errorMessage: string) => void
) => {
  if (name === "") setError("Ошибка! Введите имя!");
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: any
) => {
  e.key === "Enter" && addUser();
};

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");
  // console.log(name);

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    let carrentValue = e.currentTarget.value;
    setName(carrentValue);
    carrentValue && setError("");
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length; // need to fix
  // debugger;

  const lastUserName = users[users.length - 1]?.name || ""; // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
