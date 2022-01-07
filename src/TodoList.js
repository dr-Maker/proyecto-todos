import React from "react";
import {TodoItem} from "./TodoItem";
import { CreateTodoButton } from './CreateTodoButton';
import "./TodoList.css"

const TodoList = (props)=>{
    const todos = props.todos; 
    const todoComplete  = props.onComplete;
    const todoDelete = props.onDelete;
    
    return(
        <React.Fragment>
            <div className="container_todo_list">
            <div className="container_todo_list_ul">
                    <ul>
                        {       
                            todos.map(todo => <TodoItem onComplete={()=>todoComplete(todo.text)} onDelete={()=>todoDelete(todo.text)} todo={todo} key={todo.text}/> ) 
                        } 
                    </ul>
                </div>
                <CreateTodoButton />
            </div>
        </React.Fragment>
    )
}


export { TodoList };