'use client'

import { useState } from "react"

export function Button() {

    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button
                onClick={add}
                className="bg-blue-200 p-2 border"
            > +1 </button>
        </div>

    )
}