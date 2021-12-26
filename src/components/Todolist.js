import React from 'react'
import Todo from './Todo'
export default function Todolists({todolists, handleToggle}) {

    return (
        <div className="grid grid-flow-col font-serif">
            <div></div>
        <div className="grid bg-gray-100 p-10 pb-20 text-2xl shadow">
            <h1 className="text-7xl mb-5">To-do list</h1>

        {todolists.map((list) => {
            return (<Todo todo={list} handleToggle={handleToggle}/>)
        })}

        </div>
        <div></div>
        </div>
    )
}
