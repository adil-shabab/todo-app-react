import {useState} from 'react'
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div>
      <Header/>
      <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}  setEditTodo={setEditTodo}/>
    </div>
  );
}

export default App;
