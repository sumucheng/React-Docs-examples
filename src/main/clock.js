// useState useEffect

import React, { useState, useEffect } from "react";
import "./clock.css";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      tick();
    }, 1000);
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <div className="clock">
        <h1> {date.toLocaleTimeString().substring(2)}</h1>
      </div>
    </div>
  );
}

export default Clock;
