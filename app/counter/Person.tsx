'use client'

import { useState } from "react"

export default function Person() {

    const [name, setName] = useState("Warodom")
    const [age, setAge] = useState(30)
    const [email, setEmail] = useState("warodom@werapun.com")

    function handleName(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        setName(e.target.value)
    }
    function handleAge(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        setAge(e.target.value)
    }
    function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    // Task: create other 2 inputs:
    // 1. age
    // 2. email


    return (
        <div className="max-w-sm border border-gray-200 rounded-lg shadow-md p-4 mx-auto">
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Person:</b> {name}
            </div>
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Age:</b> {age}
            </div>
            <div className="bg-gray-200 p-2 rounded-md mb-2">
                <b>Email:</b> {email}
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
                    type="number"
                    name="name"
                    value={age}
                    onChange={handleAge}
                />
            </div>
            <div> 
                <label
                    htmlFor="name">Email</label>
                <input
                    className="border p-2 w-full rounded-md"
                    type="email"
                    name="name"
                    value={email}
                    onChange={handleEmail}
                />
            </div>

        </div>
    )
}