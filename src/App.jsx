import { useState } from 'react'
import './App.css'
import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState([
  ]);


  const addTodo = (text) => {

    const newTodos = [...todos,
    {
      text,
    },
    ];
    setTodos(newTodos);
  };

  return <div className="app">

    <h1>Lista de Tarefas</h1>
    <div className="todo-List">
      {todos.map((todo) => (

        <Todo todo={todo} />

      ))}
    </div>
    <TodoForm addTodo={addTodo} />
  </div>
}

export default App
