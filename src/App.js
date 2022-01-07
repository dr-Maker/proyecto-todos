import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from './TodoList';
import { useState } from "react";

import './App.css';

const todosDefault = [
  {
    text: "hacer aseo",
    completed: false
  },
  {
    text: "pruebas Platzi",
    completed: false
  },
  {
    text: "Tomar Desayuno",
    completed: true
  },
  {
    text: "Ver el regalo de navidad",
    completed: false
  },
  {
    text: "Ir al supermercado",
    completed: true
  }
]

function App() {

  const [todos , setTodos] = useState(todosDefault);
  const [searchs, setSearchs] = useState("");

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos= todos.length;

  let searchTodos = [];

  !searchs.length >= 1 
  
  ? searchTodos = todos 
  
  : searchTodos = todos.filter(todo =>{
    const todoText = todo.text.toLowerCase();
    const searchText = searchs.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text)=>{
    const todoIndex = todos.findIndex( todo => todo.text === text );
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex( todo => todo.text === text );
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <div className="container_head">
        <h1 className="title">TODO APP</h1>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
      <TodoSearch searchs={searchs} setSearchs={setSearchs}/>
      </div>

      <TodoList todos={searchTodos} onComplete={completeTodo} onDelete={deleteTodo} />



    </React.Fragment>
  );
}

export default App;
