'use client'

import { useState } from "react"

export default function Person() {  

    const [name, setName] = useState("Warodom") 

    function handleName(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        setName(e.target.value)
    }

    // Task: create other 2 input:
    // 1. age
    // 2. email

    
    return (
        <div>
            <div className="max-w-sm border border-gray-200 rounded-lg shadow-md p-4 mx-auto">
                <div>
                Person: {name}
                </div>
                
                <label 
                    htmlFor="name">Name</label>
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