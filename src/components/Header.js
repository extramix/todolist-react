import React from 'react'

export default function Header() {

    const todolists = ['Finish pancakes', 'Do laundry', 'Add navbar']

    return (
        <div className="grid grid-flow-col font-serif">
            <div></div>
        <div className="grid bg-gray-100 p-10 pb-20 text-2xl shadow">
            <h1 className="text-7xl mb-5">To-do list</h1>

        {todolists.map((list) => {
            return <li>{list}</li>
        })}

        </div>
        <div></div>
        </div>
    )
}
