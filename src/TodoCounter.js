import React from "react";
import "./TodoCounter.css";
function TodoCounter({completedTodos, totalTodos}){
    return(
        <React.Fragment>
            <h2 className="text-todo-completed">Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </React.Fragment>
    )
}

export { TodoCounter };