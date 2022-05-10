import React from "react";
import "./TodoList.css";

function TodoList({ todos, setTodos }) {
  return (
  <div className="list">
      <ul>
      {todos.map((todo,index)=>{
        return(
        <li key={index}>
          {todo.title} 
          
          <i className="fa-solid fa-pen-to-square"></i>
          <i  className="fa-solid fa-trash-can"></i>
        </li>
        )
      })}
      </ul>
  </div>
  )
}

export default TodoList;
