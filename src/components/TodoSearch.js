import React from "react";
import "./TodoSearch.css"


const TodoSearch = ({searchs, setSearchs})=>{

    const searchTodos = (e)=>{
        const search = e.target.value;
        setSearchs(search);
    }
    return(
        <React.Fragment>
            <div className="container_search">
                <input className="search" 
                 placeholder="Buscar Todo"
                 value={searchs} 
                 onChange={searchTodos}
                 />
            </div>
        </React.Fragment>
    )
}

export { TodoSearch };