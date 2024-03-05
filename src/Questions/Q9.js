// Build a functional React component named CommentList that accepts an array of comment objects (each with a unique ID) as a prop and displays a list of comments, including the user's name and comment text.
import React from 'react'

const CommentList = ({comments}) => {
  return (
    <div>
      <h4>Q9. Build a functional React component named CommentList that accepts an array of comment objects (each with a unique ID) as a prop and displays a list of comments, including the user's name and comment text.</h4>

      <ol>
        {comments.map(comment => (
          <li key={comment.id}>
            <strong>{comment.user}</strong>: {comment.text}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default CommentList