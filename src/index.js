import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./main/todo";
import Clock from "./main/clock";
import Login from "./main/login";
import Form from "./main/form";
import Boil from "./main/boiling";

function App() {
  return (
    <div className="wrapper">
      <Clock />
      <Todo />
      <Login />
      <Form />
      <Boil />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
