'use client'

import { useState } from "react"
import { Pencil, SquareX } from "lucide-react"

export default function Todo() {

    const [todos, setTodos] = useState([
        { id: 1, title: 'Writing Next.js', complete: true },
        { id: 2, title: 'Do homework', complete: false },
        { id: 3, title: 'Sleeping', complete: true },
    ])

    const [task, setTask] = useState('')

    const addTask = () => {
        if (!task) return
        const newTask = {
            id:  todos[todos.length-1].id  + 1,
            title: task,
            complete: false
        }
        setTodos([...todos, newTask])
        setTask('')
    }

    const deleteTask = (id: number) => {
        console.log("Id: ", id)
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    return (<div className="border-2 max-w-lg border-gray-300 rounded-lg mx-auto p-4">
        <h1 className="text-xl font-bold">Todo</h1>
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className="flex items-center gap-4 border-b-2 border-gray-300 p-2">
                        <span>{todo.id}. </span>
                        <span
                        >{todo.title}</span>
                        <input
                            className="mr-8"
                            type="checkbox"
                            defaultChecked={todo.complete} /> 
                        <SquareX
                            onClick={() => deleteTask(todo.id)}
                            />
                        <Pencil /> 
                    </li>
                ))}
            </ul>

            <input
                className="border-2 border-gray-300 rounded-lg p-2 m-2"
                type="text"
                value={task}
                onChange={e => setTask(e.target.value)}
                placeholder="Add a new todo" />

            <button
                onClick={addTask}
                className="border-2 border-gray-300 rounded-lg p-2 m-2 bg-blue-500 text-white"
            >Add</button>
        </div>
    </div>)
}