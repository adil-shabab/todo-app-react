import React from "react";
import "./TodoList.css";

function TodoList({ todos, setTodos }) {
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return {...item, completed: !item.completed}
                }
                return item
            })
        )
        console.log(todos)
    }

    const handleDelete=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id))
    }
  return (
  <div className="list">
      <ul>
      {todos.map((todo,index)=>{
        return(
        <li key={index}>
          {todo.title} 

          <i onClick={()=> handleComplete(todo)}  class="fa-solid fa-circle-check"></i>
          <i className="fa-solid fa-pen-to-square"></i>
          <i onClick={()=>handleDelete(todo)} className="fa-solid fa-trash-can"></i>
        </li>
        )
      })}
      </ul>
  </div>
  )
}

export default TodoList;
