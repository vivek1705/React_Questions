// implement add and delete items when respective button is clicked

import React, { useState } from 'react';

function AddDeleteItems() {
    const [items, setItems] = useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ]);

    const addItem = () => {
        const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
        setItems([...items, newItem]);
    };

    const deleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };

    return (
        <div>
            <h4>Q11. implement add and delete items when respective button is clicked</h4>
            
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
            
        </div>
    );
}

export default AddDeleteItems;