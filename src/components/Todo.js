import React from 'react'

export default function Todo({todo, handleToggle}) {

    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id)
    }
    return (

            <p className={(todo.complete? "cursor-pointer line-through text-gray-500 select-none" : "cursor-pointer select-none")}
            id={todo.id} key ={todo.id + todo.task} value={todo.id} onClick={handleClick}>{todo.task}</p>

    )
}
