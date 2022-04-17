import React from "react";
import "./Button.css";

const CreateTodoButton = (props)=>{
    const clickCreateTodo = ()=>{
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <React.Fragment >
            <div className="container-btn">
                <button className="btn" onClick={clickCreateTodo}>
                    agregar TODO
                </button>
            </div>
        </React.Fragment>
    )
}

export { CreateTodoButton };