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
    console.log(name);

    setName(name);
    addUserCallback(name);
    setName("");
  }
};

export const pureOnBlur = (
  name: string,
  setError: (errorMessage: boolean) => void
) => {
  if (name === "") setError(true);
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
  const [error, setError] = useState<boolean>(false);
  // console.log(name);

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    let carrentValue = e.currentTarget.value;
    setName(carrentValue);
    carrentValue && setError(false);
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
