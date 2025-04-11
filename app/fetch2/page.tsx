'use client'

import { useEffect, useState } from "react"

type TPost = {
    title: string
    author: string
}

export default function Fetch2() {

    const [posts, setPosts] = useState<TPost[]>([])

    useEffect(() => {
        const fetch2API = async () => {
            const data = await fetch('/api/vercel')
            const posts = await data.json()
            console.log("Posts: ", posts)
            setPosts(posts)
        }
        fetch2API()
    }, [])


    if (posts.length === 0) {
        // Check if profile is empty
        return <div>Loading...</div>
    }

    return (<div>
        <h1>Fetch2</h1>
        <ul>
            {
                posts.map((post: TPost, index: number) => {
                    if (index > 4) return;
                    return (<li
                        className="border border-gray-300 rounded mt-2 mr-2 p-4"
                        key={index}>
                        {index + 1}. Title: {post.title} <br />
                        Name: {post.author} <br />
                    </li>)
                }
                )
            }


        </ul>

        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => console.log("Clicked")}
        > Click </button>

    </div>)
}