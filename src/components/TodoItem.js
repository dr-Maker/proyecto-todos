import React from "react";
import './TodoItem.css';


const TodoItem = (props)=>{
    const {todo} = props;

    return(
        <React.Fragment>
            <li>
                <div className="container_item">
                    <button text="button"
                    onClick={props.onComplete}
                    >
                        check
                    </button>
                    <p className={todo.completed === true ? "todoComplete": "todoUncomplete"}>{todo.text}</p>
                    
                    <button text="button"
                    onClick={props.onDelete}
                    >papelera</button>
                </div>
            </li>
        </React.Fragment>
    )
}

export { TodoItem };