//  Add conditional rendering to a JSX component, so it displays one message if variable is true and another message if it's false.

import React from 'react';

const ConditionalRendering = ({ isTrue }) => {
  return (
    <div>
      <h4>Q3. Add conditional rendering to a JSX component, so it displays one message if a variable is true and another message if it's false.</h4>

      {isTrue ? (
        <p>This message when the variable is true.</p>
      ) : (
        <p>This message when the variable is not true.</p>
      )}
    </div>
  );
};

export default ConditionalRendering;
