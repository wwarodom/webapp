'use client'

import { useState } from "react"

export default function Person() {

    const [name, setName] = useState("Warodom")

    function handleName(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        setName(e.target.value)
    }

    // Task: create other 2 inputs:
    // 1. age
    // 2. email


    return (
        <div className="max-w-sm border border-gray-200 rounded-lg shadow-md p-4 mx-auto">
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Person:</b> {name}
            </div>
            <div> 
                <label
                    htmlFor="name">Name</label>
                <input
                    className="border p-2 w-full rounded-md mb-4"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                />
            </div>
            <div> 
                <label
                    htmlFor="name">Age</label>
                <input
                    className="border p-2 w-full rounded-md mb-4"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                />
            </div>
            <div> 
                <label
                    htmlFor="name">Email</label>
                <input
                    className="border p-2 w-full rounded-md"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleName}
                />
            </div>

        </div>
    )
}