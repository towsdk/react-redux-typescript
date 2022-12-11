import React from "react";
import UseFetch from "./UseFetch";


export const FetchApi = () => {
    const {datas, isLoading, error} = UseFetch("https://jsonplaceholder.typicode.com/todos");

    const loadingMessage = "<p>Loading wait</p>";
    const errorMessage = "<p>{error}</p>";
    const todosElement = datas && 
    datas.map((data) => { 
        return <p key={data.id}>{data.title}</p> });
    
    return (
        <div>
            <h1>Todos</h1>
            {isLoading && loadingMessage}
            {error && errorMessage}
            {todosElement}
        </div>
    )
}
