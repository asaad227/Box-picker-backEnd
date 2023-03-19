

async function getUsers() {
    let response = await fetch(`http://localhost:5000/game`, {
      method: "GET",
    });
    let data = await response.json();
    const {payload} = data;
    console.log(payload)
    var nameP = document.querySelector(".nameP");
    var scoreP = document.querySelector(".scoreP")
    var nam; var total;
    if(payload.length <=  1){
        var divN = document.createElement("div");
        var divS = document.createElement("div");
        nam = nameP.appendChild(divN);
        total = scoreP.appendChild(divS)
        nam.innerHTML = payload[0].name;
        total.innerHTML = payload[0].score
    }
   
if(payload.length > 1){
    
        const sorted = Object.entries(payload).sort((a, b)=> b[1].score - a[1].score);
        console.log(sorted)
        const nameMap = sorted.map(e=> e[1].name);
        const scoreMap = sorted.map(e=> e[1].score);
        for(let i = 0; i < 10; i++){
            var divN = document.createElement("tr");
            var divS = document.createElement("tr");
            nam = nameP.appendChild(divN);
            total = scoreP.appendChild(divS)
                nam.innerHTML = `${nameMap[i]}`;
                total.innerHTML =   `${scoreMap[i]}`;
        }
        
        
}
    
  
    }
    
    getUsers()