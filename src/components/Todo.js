import React from 'react'

export default function Todo({todo, handleToggle}) {

    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id)
    }
    return (
        <div>
            <p className={(todo.complete? "cursor-pointer line-through text-gray-500" : "cursor-pointer")}
            key ={todo.id} onClick={handleClick}>{todo.task}</p>
        </div>
    )
}
