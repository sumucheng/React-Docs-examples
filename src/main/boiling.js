// 状态提升
import React, { useState } from "react";
import "./boiling.css";

function Water(props) {
  return (
    <div>
      <p className="boiling-water">
        {parseFloat(props.tem) >= 100
          ? "~~~~~水烧开啦~~~~~~"
          : "------------水------------"}
      </p>
    </div>
  );
}

function Input(props) {
  function change(e) {
    props.change(e.target.value);
  }
  return (
    <div>
      <fieldset className="boiling-fieldset">
        <legend>输入一个{props.name === "c" ? "摄氏" : "华氏"}温度</legend>
        <input value={props.tem} onChange={change}></input>
      </fieldset>
    </div>
  );
}

function Boil() {
  const [tem, setTem] = useState("");
  const [name, setName] = useState("c");
  function C(value) {
    setTem(value);
    setName("c");
  }
  function F(value) {
    setTem(value);
    setName("f");
  }

  return (
    <div>
      <Input name="c" tem={name === "f" ? convert(tem, f2c) : tem} change={C} />
      <Input name="f" tem={name === "c" ? convert(tem, c2f) : tem} change={F} />
      <Water tem={name === "f" ? convert(tem, f2c) : tem} />
    </div>
  );
}

function f2c(f) {
  return ((f - 32) * 5) / 9;
}
function c2f(c) {
  return (c * 9) / 5 + 32;
}

function convert(tem, fn) {
  const t = parseFloat(tem);
  if (Number.isNaN(t)) return;
  return fn(t).toString();
}

export default Boil;
