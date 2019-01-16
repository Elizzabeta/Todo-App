import React from 'react';

export const Todos = ({todos, deleteTodo}) => {

    const todolist = todos.length ? (
            todos.map(todo => {
                return (
                    <div className="collection-item" key={todo.id}>
                        <span onClick={() => {deleteTodo(todo.id)}}>
                            {todo.content}
                        </span>
                    </div>
                )
            })
    ) : (
        <p className="center">You've done all your work!</p>
    )

    return(
        <div className="todos collection">
            {todolist}
        </div>
    )
}