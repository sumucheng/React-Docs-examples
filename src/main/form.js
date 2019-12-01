// 表单 受控组件 多个受控组件
import React, { useState } from "react";
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");

  function submit(e) {
    e.preventDefault();
    alert(`name: ${name} , gender: ${gender} `);
  }

  function change(e) {
    switch (e.target.name) {
      case "name":
        setName(e.target.value.toUpperCase());
        break;
      case "gender":
        setGender(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <form className="form" onSubmit={submit}>
        <div className="name">
          <label>
            <span>Name:</span>
            <input type="text" value={name} onChange={change} name="name" />
          </label>
        </div>
        <div className="gender">
          <label>
            <span>Gender:</span>
            <select value={gender} onChange={change} name="gender">
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </label>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
