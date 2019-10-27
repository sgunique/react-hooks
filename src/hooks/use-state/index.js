import React, { useState } from "react";
import "./use-state.css";

function UseStateHook() {
  const [ count, setCount ] = useState(0);

    return (
      <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
      </div>
    );
}

export default UseStateHook;