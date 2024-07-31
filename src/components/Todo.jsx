import React from 'react'

const Todo = ({ todo }) => {
  return (

    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      <div className="content">
        <p>{todo.text}</p>
      </div>
      
    </div>

  )
}

export default Todo
