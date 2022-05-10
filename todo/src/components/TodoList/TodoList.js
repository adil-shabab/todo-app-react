import React from "react";
import "./TodoList.css";

function TodoList({ todos, setTodos, setEditTodo}) {




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

    const handleEdit=({id})=>{
        const findTodo = todos.find((todo)=>todo.id === id)
        setEditTodo(findTodo)
        console.log(findTodo)
    }

  return (
  <div className="list">
      <ul>
      {todos.map((todo,index)=>{
        return(
        <li key={index}>
          {todo.title} 

          <i onClick={()=> handleComplete(todo)}  className="fa-solid fa-circle-check"></i>
          <i onClick={()=>handleEdit(todo)} className="fa-solid fa-pen-to-square"></i>
          <i onClick={()=>handleDelete(todo)} className="fa-solid fa-trash-can"></i>
        </li>
        )
      })}
      </ul>
  </div>
  )
}

export default TodoList;
