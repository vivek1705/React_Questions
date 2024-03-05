// Create a React component that renders a button. Implement an event handler that logs a message to the console when the button is clicked.

import React from 'react'

const ButtonClick = () => {
    const handleClick = () => {
        console.log("button clicked..");
        
    };

  return (
    <div>
        <h4>Q10. Create a React component that renders a button. Implement an event handler that logs a message to the console when the button is clicked. </h4>
        <h2>Click the button. - open console to show output</h2>
        <button onClick={handleClick}>Button</button>    
    </div>
  );
};

export default ButtonClick;