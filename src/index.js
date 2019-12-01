import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./main/todo";
import Clock from "./main/clock";
import Login from "./main/login";
import Form from "./main/form";
import Boil from "./main/boiling";
import Welcome from "./main/welcome.js";
import Product from "./main/product";
import Form2 from "./advanced/form";
import Theme from "./advanced/theme";
import Table from "./advanced/fragments";

function App() {
  return (
    <div className="wrapper">
      <Clock />
      <Todo />
      <Login />
      <Form />
      <Boil />
      <Welcome />
      <Product />
      <Form2 />
      <Theme />
      <Table />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
