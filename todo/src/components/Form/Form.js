import {useState} from 'react'
import './Form.css'

function Form({input, setInput, todos, setTodos}) {
    const [count, setCount] = useState(1);
    const onFormSubmit=(e)=>{
        setCount(count+1)
        e.preventDefault()
        setTodos([...todos,{id:count, title:input, completed:false}])
        console.log(todos)
        setInput("")
    }
  return (
    <div className="todo-container d-flex flex-column justify-content-center align-items-center">
      <div className="shadow p-3 d-flex flex-column justify-content-center align-items-center">
        <h2>Todo App</h2>
        <div>
          <form action="" onSubmit={onFormSubmit}>
            <input
              required
              className="box-shadow"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
            />
            <button type='submit' className="btn shadow ms-3">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
