// Create a React component called ShoppingList that receives an array of shopping items as a prop and renders an
// ordered list (ol) with each item as a list item (li).

import React from 'react';

const ShoppingList = ({ shoppingItems }) => {
  return (
    <div>
      <h4>Q8. Create a React component called ShoppingList that receives an array of shopping items as a prop and renders an ordered list (ol) with each item as a list item (li). </h4>

      <ol>
        {shoppingItems.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ol>
    </div>
  );
};

export default ShoppingList;
