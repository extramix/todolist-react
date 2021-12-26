import React from 'react'
import Todo from './Todo'
export default function CompletedList({todolists, handleToggle}) {
    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id)
    }

    const completedlists = todolists.filter((list) => {
        return list.complete
    })
    return (
        <div className="p-5">
            <h2 className=" mx-10 mb-5 text-lg">Completed tasks</h2>
        <div>
        {completedlists.map((list) => {
            return <p className="cursor-pointer text-gray-400 select-none" onClick={handleClick}
            id={list.id} key ={list.id + list.task} value={list.id}>{list.task}</p>
        })}
        </div>
        </div>
    )
}
