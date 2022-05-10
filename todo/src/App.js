import react,{useState} from 'react'
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
