import React from "react";
import './Form.css'

function Form() {
  return (
    <div className="todo-container d-flex flex-column justify-content-center align-items-center">
      <div className="shadow p-3 d-flex flex-column justify-content-center align-items-center">
        <h1>Todo App</h1>
        <div>
          <form action="">
            <input
              className="box-shadow"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
            />
            <button onClick={addTask} className="btn shadow ms-3">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
