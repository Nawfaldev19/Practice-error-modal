import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //#region Ref
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  //#endregion

  //#region States
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  //#endregion

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredNameRef = nameInputRef.current.value;
    const enteredAgeRef = ageInputRef.current.value;

    if (
      enteredNameRef.trim().length === 0 ||
      enteredAgeRef.trim().length === 0
    ) {
      //empty
      setError({
        id: Math.random().toString(),
        title: "Invalid Input",
        message: "Please enter the valid name and age (non empty values)",
      });
      console.log("invalid Input");

      nameInputRef.current.value = "";
      ageInputRef.current.value = "";

      return;
    }
    if (+enteredAgeRef < 1) {
      //less
      console.log("Invalid Age");
      setError({
        id: Math.random().toString(),
        title: "Invalid Age",
        message: "Please enter a number > 0",
      });
      ageInputRef.current.value = "";

      return;
    }

    props.onAddUser(enteredNameRef, enteredAgeRef);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
   
  };

  const errorHandler = () => {
    setError(null);
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form className={classes.input} onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age(Inyears)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
