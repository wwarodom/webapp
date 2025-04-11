import Image from 'next/image'

export default async function FetchAPI() {
    const data = await fetch('https://api.github.com/users/wwarodom')
    const profile = await data.json()

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

                </div>



            </div>
        </div>)
}