// 非受控组件

import React from "react";
import "./form.css";

function Form() {
  let textInput = null;

  function onSubmit(e) {
    alert(`创建角色 ${textInput.value} 成功`);
    e.preventDefault();
  }

  return (
    <div className="form2-wrapper">
      <form onSubmit={onSubmit} className="form2">
        <div className="name">
          <label>
            <span>昵称:</span>
            <input
              type="text"
              defaultValue="沐雨澄风"
              ref={input => (textInput = input)}
            />
          </label>
        </div>
        <div className="gender">
          <label>
            <span>性别:</span>
            <input type="radio" name="gender" value="male" defaultChecked />
            <label htmlFor="male">男</label>
            <input type="radio" name="gender" value="female" />
            <label htmlFor="female">女</label>
          </label>
        </div>
        <input type="submit" value="确认" className="submit" />
      </form>
    </div>
  );
}

export default Form;
