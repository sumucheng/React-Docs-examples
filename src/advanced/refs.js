//
import React, { useState, useEffect, createRef } from "react";

function AutoFocus() {
  const textInput = createRef();

  useEffect(() => {
    textInput.current.focus();
  });

  return (
    <div>
      <input type="text" ref={textInput}></input>
      <button>click</button>
    </div>
  );
}

export default AutoFocus;
