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
  setError: (errorMessage: boolean) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void
) => {
  if (name === "") {
    setError(true);
  } else {
    setName(name);
    addUserCallback(name);
    setName("");
  }

  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
};

export const pureOnBlur = (
  name: string,
  setError: (errorMessage: boolean) => void
) => {
  if (name === "") {
    setError(true);
  }

  // если имя пустое - показать ошибку
};

export const pureOnEnter = (e: any, addUser: any) => {
  // если нажата кнопка Enter - добавить
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  console.log(name);

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);

    if (e.currentTarget.value.length > 5) setError(true);
    // error && setError("");
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: any) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = 0; // need to fix
  const lastUserName = "some name"; // need to fix

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
