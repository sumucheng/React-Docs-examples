import React, { useState } from "react";
import "./todo.css";

function List(props) {
  function toDate(id) {
    const date = new Date(id);
    return [date.getMonth(), date.getDate()];
  }
  return (
    <ul>
      {props.events.map((i, index) => (
        <li key={index}>
          {i.text}
          <span className="date">{`${toDate(i.id)[0]}/${
            toDate(i.id)[1]
          }`}</span>
        </li>
      ))}
    </ul>
  );
}

function Todo() {
  const [events, setEvents] = useState([]);
  const [text, setText] = useState("");
  function submit(e) {
    e.preventDefault();
    if (!text.length) return;
    setEvents(events.concat({ text: text, id: Date.now() }));
    setText("");
  }
  function change(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <div className="list">
        <div className="title">TODO</div>
        <List events={events}></List>
        <form className="todo-form" onSubmit={submit}>
          <input value={text} onChange={change}></input>
          <button className="add">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Todo;
