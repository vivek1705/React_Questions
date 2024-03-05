//create counter with two buttons as increment and decrement.

import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    };

    const decrement = () =>{
        setCount(count - 1);
    };

  return (
    <div>
        <h4>Q5. Create counter application with increment and decrement buttons.</h4>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;