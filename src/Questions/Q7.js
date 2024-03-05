//  Construct a component called "ToDoList" that takes an array of tasks as a prop and renders an unordered list of tasks. Ensure each list item has a unique key8. 


import React from 'react'

const ToDoList = ({tasks}) => {

  return (
    <div>
        <h4>Q7. Construct a component called "ToDoList" that takes an array of tasks as a prop and renders an unordered list of tasks. Ensure each list item has a unique key8. </h4>
    <ul>
        {tasks.map((task, index) => (
        <li key={index}> {task}</li>
      ))}
    </ul>
    </div>
  )
}

export default ToDoList;