import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { FaTrashAlt} from "react-icons/fa";
import './TodoItem.css';


const TodoItem = (props)=>{
    const {todo} = props;

    return(
        <React.Fragment>
            <li>
                <div className="container_item">
                    <button  className="btnIcon" text="button"
                    onClick={props.onComplete}
                    >
                    <HiCheckCircle  size={"25px"}/>
                    </button>
                    <p className={todo.completed === true ? "todoComplete": "todoUncomplete"}>{todo.text}</p>
                    
                    <button text="button"  className="btnIcon"
                    onClick={props.onDelete}
                    ><FaTrashAlt  size={"25px"}/></button>
                </div>
            </li>
        </React.Fragment>
    )
}

export { TodoItem };