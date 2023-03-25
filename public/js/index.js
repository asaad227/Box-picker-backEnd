async function getUsers(){
    let response = await fetch("./get_leaderboard/get_leaderboard",{
        method: "GET"
    })

    let data = response.json();
    console.log(data)
}