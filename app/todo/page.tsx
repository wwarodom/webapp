'use client'

import { useState } from "react"

export default function Todo() {

    const [todos, setTodos] = useState([
        { id: 1, title: 'Writing Next.js', complete: true },
        { id: 2, title: 'Do homework', complete: false },
        { id: 3, title: 'Sleeping', complete: true },
    ])

    return (<div className="border-2 max-w-sm border-gray-300 rounded-lg mx-auto p-4">
        <h1 className="text-xl font-bold">Todo</h1>
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className="my-2">
                        <span>{todo.id}. </span>
                        <span>{todo.title}</span>
                        <input
                            type="checkbox"
                            checked={todo.complete} />
                    </li>
                ))}
            </ul>
            <input type="text" placeholder="Add a new todo" />
            <button>Add</button>
        </div>
    </div>)
}