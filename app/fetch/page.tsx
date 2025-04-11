'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function FetchAPI() {

    const init = {
        "login": "wwarodom",
        "id": 6958879,
        "node_id": "MDQ6VXNlcjY5NTg4Nzk=",
        "avatar_url": "https://avatars.githubusercontent.com/u/6958879?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/wwarodom",
        "html_url": "https://github.com/wwarodom",
        "followers_url": "https://api.github.com/users/wwarodom/followers",
        "following_url": "https://api.github.com/users/wwarodom/following{/other_user}",
        "gists_url": "https://api.github.com/users/wwarodom/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/wwarodom/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/wwarodom/subscriptions",
        "organizations_url": "https://api.github.com/users/wwarodom/orgs",
        "repos_url": "https://api.github.com/users/wwarodom/repos",
        "events_url": "https://api.github.com/users/wwarodom/events{/privacy}",
        "received_events_url": "https://api.github.com/users/wwarodom/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "Warodom Werapun",
        "company": "CoE, PSU",
        "blog": "https://werapun.com/",
        "location": "Phuket, Thailand",
        "email": null,
        "hireable": true,
        "bio": "CoE Lecturer",
        "twitter_username": null,
        "public_repos": 144,
        "public_gists": 42,
        "followers": 131,
        "following": 45,
        "created_at": "2014-03-15T10:42:07Z",
        "updated_at": "2025-03-21T02:24:30Z"
        }

    const [name, setName] = useState('wwarodom')
    const [profile, setProfile] = useState(init)


    const fetchAPI = async () => {
        const data = await fetch(`https://api.github.com/users/${name}`)
        const profile = await data.json()
        setProfile(profile)
    }

    return (
        <div>
            <h2>Fetch API</h2>
            <div>{
                JSON.stringify(profile)}</div>
            <hr /><br />
            <div className='flex items-center gap-4 m-4 border border-gray-300 p-4 rounded-lg'>
                <div>
                    <Image
                        className="rounded-full"
                        src={profile.avatar_url}
                        alt="Avatar"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <div>
                        Login: {profile.login}
                    </div>
                    <div>
                        id: {profile.id}
                    </div>
                    <div>
                        <input
                            className='border border-gray-300 rounded mt-2 mr-2'
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button
                            onClick={fetchAPI}
                            className='border px-2'
                        >Update</button>
                    </div>
                </div>



            </div>
        </div>)
}