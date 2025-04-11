export default function FetchAPI() {


    const profile = fetch('https://api.github.com/users/wwarodom')
    console.log("Profile: ", profile)
    profile.then((res) => {
        console.log("Response: ", res)
        return res.json()
    }).then((data) => {
        console.log("Data: ", data)
    }).catch((error) => {
        console.log("Error: ", error)
    })

    return (
        <div>Fetch API</div>)
}