// 组合 包含关系 特殊实例

import React, { useState } from "react";
import "./welcome.css";

function Border(props) {
  return <div className={`border ${props.color}`}>{props.children}</div>;
}

function Dialog(props) {
  return (
    <div>
      <Border color={props.color}>
        <h1>{props.title}</h1>
        <p className="welcome-p">{props.content}</p>
        {props.children}
      </Border>
    </div>
  );
}

function Welcome() {
  const [color, setColor] = useState("pink");
  function changeColor(e) {
    setColor(e.target.value);
  }
  return (
    <div>
      <Dialog
        color={color}
        title="Welcome to React world"
        content="try to change border color"
      >
        <select value={color} onChange={changeColor}>
          <option value="pink">pink</option>
          <option value="yellow">yellow</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>
      </Dialog>
    </div>
  );
}
export default Welcome;
