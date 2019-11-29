// 事件处理 条件渲染 阻止组件渲染 列表组件 map&key

import React, { useState } from "react";
import "./login.css";

function Show(props) {
  return props.show ? <div className="noLogin">未登录</div> : null;
}

function Button(props) {
  return (
    <button className="login-button" onClick={props.onClick}>
      {props.name}
    </button>
  );
}

function Greeting(props) {
  return (
    <h1 className="greeting">{props.isLoggedIn ? "欢迎回来~" : "请登录"}</h1>
  );
}

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [btn, setBtn] = useState("登出");

  function handleClick() {
    setIsLoggedIn(!isLoggedIn);
    setBtn(isLoggedIn ? "登录" : "登出");
  }

  return (
    <div>
      <Show show={!isLoggedIn} />
      <Greeting isLoggedIn={isLoggedIn} />
      <Button onClick={handleClick} name={btn} />
    </div>
  );
}

export default LoginControl;
