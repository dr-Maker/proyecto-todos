import React, { useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal';
import { TodoForm } from "./components/TodoForm";
import { Loading } from "./components/Loading";
import { EmpyTodo } from "./components/EmptyTodo";

import './App.css';

function App() {

  const {completedTodos, searchValue, setSearchValue , totalTodos, completeTodo, deleteTodo, searchedTodos, setOpenModal, openModal, error, loading} = useContext(TodoContext);


  return (
    <React.Fragment>
      <div className="container_head">
        <h1 className="title">TODO APP</h1>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>

      <TodoSearch searchs={searchValue} setSearchs={setSearchValue}/>
      </div>

      

       { loading ?
      <Loading />
       :
       error ? <h1>Error</h1> :
       !searchedTodos.length ? < EmpyTodo/> :
      <TodoList todos={searchedTodos} onComplete={completeTodo} onDelete={deleteTodo} />
       } 
            

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      {!loading && <CreateTodoButton setOpenModal={setOpenModal}/>}
      

    </React.Fragment>
  );
}

export default App;
