import React, { useState } from "react";
import "./App.css";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), username: uName, age: uAge },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
