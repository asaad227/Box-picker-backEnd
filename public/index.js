const btn1 = document.querySelector(".box1");
const btn2 = document.querySelector(".box2");
const btn3 = document.querySelector(".box3");
const btn4 = document.querySelector(".box4");
const btn5 = document.querySelector(".box5");
const btn7 = document.querySelector(".box7");
const btn6 = document.querySelector(".box6");
const btn8 = document.querySelector(".box8");
const btn9 = document.querySelector(".box9");
const btn10 = document.querySelector(".box10");
const btn11 = document.querySelector(".box11");
const btn12 = document.querySelector(".box12");
const btn13 = document.querySelector(".box13");
const btn14 = document.querySelector(".box14");
const btn15 = document.querySelector(".box15");
const score = document.querySelector(".total");
const level = document.querySelector(".round");
const mainDiv = document.querySelector(".mainDiv");
const mainDiv2 = document.querySelector(".mainDiv2");
const divBox = document.querySelector(".divBox");
const play = document.querySelector(".play");
const start = document.querySelector(".start")
const remainingBox = document.querySelector(".remainingBox");
const scoreDisplay = document.querySelector(".scoring");
const abra = document.querySelector(".abra")
const reload = document.querySelector(".reload");
const endBtn = document.querySelector(".endBtn");
const abra1 = document.querySelector(".abra1");
const start1 = document.querySelector(".start1");
const find = document.querySelector(".find");
const find1 = document.querySelector(".find1")
const find2 = document.querySelector(".find2");
const easy = document.querySelector(".easy");
const medium = document.querySelector(".medium");
const hard = document.querySelector(".hard");
const modeDisplay = document.querySelector(".modeDisplay");
const container = document.querySelector(".container");
const darkMode = document.querySelector(".darkMode");
const whiteMode = document.querySelector(".whiteMode");
const darkMode1 = document.querySelector(".darkMode1");
const whiteMode1 = document.querySelector(".whiteMode1");
const nameIn = document.querySelector(".nameIn");
const playerName = document.querySelector(".playerName");
const runningTotal = document.querySelector(".total");
const dataStore = document.querySelector(".dataStore");
const hide = document.querySelector(".hide");
// create box pick option for the player
var pickBox = 9;
let result= [];
var round = 1;
var count = [];
var total = 0;
var leaderBoard = 0;
var num = 3;
var gameMode = "Easy";
var users;


document.addEventListener("click", function(event){
 
    if(event.target === darkMode || event.target === darkMode1 ){
        console.log("darkMode")
        const audio = new Audio;
        audio.src ="./Audio/mixkit-arcade-player-select-2036.wav"
        audio.play()
        document.querySelector(".body1").className = "body2";
        whiteMode1.style.display = "inline";
        darkMode1.style.display = "none"
        whiteMode.style.display = "inline";
        darkMode.style.display = "none"
    }

    if(event.target === whiteMode || event.target === whiteMode1){
        console.log("whiteMode")
        const audio = new Audio;
        audio.src ="./Audio/mixkit-arcade-player-select-2036.wav"
        audio.play()
        document.querySelector(".body2").className = "body1";
        darkMode.style.display = "inline";
        whiteMode.style.display = "none";
        darkMode1.style.display = "inline";
        whiteMode1.style.display = "none";
    }

    if(event.target === play){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-arcade-player-select-2036.wav"
        audio.play()
        // const total = result.reduce((acc, curr)=> acc + curr, 0);
        const game = round;
        // score.innerHTML = `Score: ${total}`;
       
        if(nameIn.value === ""){
       alert("Please enter your name!!")
       }
       if(nameIn.value !== ""){
        playerName.innerHTML = `Player Name: ${nameIn.value[0].toUpperCase() + nameIn.value.slice(1)}`
        level.innerHTML = `Level: ${game}`;
        mainDiv.className = "mainDiv1";
        divBox.style.display = "initial";
        abra.style.display = "none";
        start.className = "start1";
         modeDisplay.style.display = "flex";
         modeDisplay.innerHTML = `Game mode: ${gameMode}`
        container.className = "containerChnage";
        runningTotal.innerHTML = `Score: ${leaderBoard}`
        
        console.log(gameMode, "play")
       }

  
      
      }
      if(event.target === easy){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-arcade-player-select-2036.wav"
        audio.play()
        num = num;
        pickBox = pickBox;
        gameMode = "Easy"
        // modeDisplay.innerHTML = `Game Mode: ${gameMode}`
        console.log(gameMode, "easy")
    }
  
    if(event.target === medium){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-arcade-player-select-2036.wav"
        audio.play()
        num = num + 1;
        pickBox = pickBox -1
        gameMode = "Medium"
        // modeDisplay.innerHTML = `Game Mode: ${gameMode}`
        console.log(gameMode, "medium")
    }

    if(event.target === hard){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-arcade-player-select-2036.wav"
        audio.play()
        num = num; 
        pickBox = pickBox - 2;
        gameMode = "Hard"
        // modeDisplay.innerHTML = `Game Mode: Hard`
        console.log(gameMode, "hard", num, pickBox)
    }
     

      if(event.target === reload){
        console.log("i have clicked")
       location.reload()
    
    }

   
    //keep pick box counter on display 
    let remender = pickBox - count.length;
    remainingBox.innerHTML = `Pick left: ${remender }`
    const random = Math.floor(Math.random()*num);
    const randomBox = Math.floor(Math.random()*num)
    //game will stop if player score more then required score 
    // as two level game so condition also made for all level 
    if(count.length === pickBox || result.length >= 2 && round === 1|| result.length >= 3 && round === 2 ||result.length >= 4 && round === 3){
       //nested codition to check round compeleted or not
       if(round === 1){
        console.log("round === 1", round)
        winner()
        resetTable()
    }else{
        if(round === 2){
            console.log("round === 2", round)
            level2()
           }else{
            if(round === 3){
                console.log("round === 3", round)
                level3()
            }
           }
    }
       
       

        

        
    }else{
        if(event.target === btn1 ){
            //if button click it will update counter and pickbox
            count.push(1)
            remender = pickBox - count.length;
            runningTotal.innerHTML = `Score: ${leaderBoard}`
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                // if this condition meet it will update result score and button class
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                result.push(10)
                btn1.className = "boxG";
                //disabled as soon as player this button, so no second pick
                btn1.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn1.className = "boxP";
                btn1.disabled = true;
            }
           
        }
      
        if(event.target === btn2 ){
            count.push(1)
            remender = pickBox - count.length;
            runningTotal.innerHTML = `Score: ${leaderBoard}`
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                result.push(10)
                btn2.className = "boxG";
                btn2.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn2.className = "boxP";
                btn2.disabled = true;
            }
        }
        if(event.target === btn3){
            count.push(1)
            remender = pickBox - count.length;
            runningTotal.innerHTML = `Score: ${leaderBoard}`
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                result.push(10)
                btn3.className = "boxG";
                btn3.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn3.className = "boxP";
                btn3.disabled = true;
            }
        }
      
        if(event.target === btn4){
            count.push(1)
            remender = pickBox - count.length;
            runningTotal.innerHTML = `Score: ${leaderBoard}`
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                result.push(10)
                btn4.className = "boxG";
                btn4.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn4.className = "boxP";
                btn4.disabled = true;
            }
        }
       
        if(event.target === btn5){
            count.push(1)
            remender = pickBox - count.length;
           
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                btn5.className = "boxG";
                btn5.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn5.className = "boxP";
                btn5.disabled = true;
            }
        }
       
        if(event.target === btn6){
            count.push(1)
            remender = pickBox - count.length;
            
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                btn6.className = "boxG";
                btn6.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn6.className = "boxP";
                btn6.disabled = true;
            }
        }
      
        if(event.target === btn7){
            count.push(1)
            remender = pickBox - count.length;
           
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                btn7.className = "boxG";
                btn7.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn7.className = "boxP";
                btn7.disabled = true;
            }
        }
        
        if(event.target === btn8 ){
            count.push(1)
            remender = pickBox - count.length;
          
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                btn8.className = "boxG";
                btn8.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn8.className = "boxP";
                btn8.disabled = true;
            }
        }
       
        if(event.target === btn9){
            count.push(1)
            remender = pickBox - count.length;
            
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                btn9.className = "boxG";
                btn9.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn9.className = "boxP";
                btn9.disabled = true;
            }
        }

        if(event.target === btn10){
            count.push(1)
            remender = pickBox - count.length;
        
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                btn10.className = "boxG";
                btn10.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn10.className = "boxP";
                btn10.disabled = true;
            }
        }

        if(event.target === btn11){
            count.push(1)
            remender = pickBox - count.length;
          
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                btn11.className = "boxG";
                btn11.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn11.className = "boxP";
                btn11.disabled = true;
            }
        }

        if(event.target === btn12){
            count.push(1)
            remender = pickBox - count.length;
         
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                btn12.className = "boxG";
                btn12.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn12.className = "boxP";
                btn12.disabled = true;
            }
        }  

        if(event.target === btn13){
            count.push(1)
            remender = pickBox - count.length;
          
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                btn13.className = "boxG";
                btn13.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn13.className = "boxP";
                btn13.disabled = true;
            }
        }  

        if(event.target === btn14){
            count.push(1)
            remender = pickBox - count.length;
          
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                btn14.className = "boxG";
                btn14.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn14.className = "boxP";
                btn14.disabled = true;
            }
        }  

        if(event.target === btn15){
            count.push(1)
            remender = pickBox - count.length;
           
            remainingBox.innerHTML = `Pick left: ${remender }`
            if(random === randomBox){
                const audio = new Audio;
                audio.src ="./Audio/ES_Magical Twinkle 1 - SFX Producer.mp3"
                audio.play()
                result.push(10)
                leaderBoard = leaderBoard + 10;
                runningTotal.innerHTML = `Score: ${leaderBoard}`
                btn15.className = "boxG";
                btn15.disabled = true;
            }else{
                const audio = new Audio;
                audio.src ="./Audio/mixkit-game-click-1114.wav"
                audio.play()
                btn15.className = "boxP";
                btn15.disabled = true;
            }
        }  
    }

 
})

function resetTable(){
    // as all these boxes has been disbled so this function will enabled all the boxes
    btn1.className = "box1"
    btn1.disabled = false; 
    btn2.className = "box2"
    btn2.disabled = false; 
    btn3.className = "box3"
    btn3.disabled = false; 
    btn4.className = "box4"
    btn4.disabled = false; 
    btn5.className = "box5"
    btn5.disabled = false; 
    btn6.className = "box6"
    btn6.disabled = false; 
    btn7.className = "box7"
    btn7.disabled = false; 
    btn8.className = "box8"
    btn8.disabled = false; 
    btn9.className = "box9"
    btn9.disabled = false;
    btn10.className = "box10"
    btn10.disabled = false;
    btn11.className = "box11"
    btn11.disabled = false;
    btn12.className = "box12"
    btn12.disabled = false;
    btn13.className = "box10"
    btn13.disabled = false;
    btn14.className = "box11"
    btn14.disabled = false;
    btn15.className = "box12"
    btn15.disabled = false;
    // reset the counter for the round 
    count.length = 0; 
    
   }
function winner(){
    // score set 
    const topScore = 10;
    //keep update total score 
    total = result.reduce((acc, curr)=> acc+curr, 0);
   
    if(total > topScore){
   
        const audio = new Audio;
        audio.src ="./Audio/mixkit-ethereal-fairy-win-sound-2019.wav"
        audio.play()
        alert(`Well done lets play next round!!`)
        //run reset table for next level
        resetTable()
        find.style.display = "none";
        find1.style.display = "inline";
        num = num;
        document.querySelector(".boxes3").style.display = "none"
        pickBox = pickBox - 1;
        const remender = pickBox - count.length;
        remainingBox.innerHTML = `Pick left: ${remender}`
        round = round + 1;
        level.innerHTML= "Level: 2"
        //clear the score for next level
        result = [];
        // score.innerHTML = `Score: 0`
    //    document.querySelector(".modeChange").style.display = "none"
    document.querySelector("footer").style.paddingTop = "75px";
       
    }

    if(total < topScore){
        runningTotal.innerHTML = `Score: ${leaderBoard}`
        fetchPostUsers()
        const audio = new Audio;
        audio.src ="./Audio/mixkit-circus-lose-2030.wav"
        audio.play()
        //clear the round and score
        round = 0
        result = []
        alert(document.querySelector(".result").innerHTML = "Better luck next time")
       find.style.display = "none"
        level.style.display ="none"
        remainingBox.style.display = "none";
        scoreDisplay.className = "scoring1"
        runningTotal.innerHTML = `Score: ${leaderBoard}`
        // document.querySelector(".total").innerHTML = `Score: ${total}`
        // document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        // document.querySelector(".mainDiv1").style.backgroundImage = "url(./gif/pikachu.gif)";
        // document.querySelector(".abra1").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue";
        document.querySelector(".modeDisplay").style.display = "none";
        // document.querySelector("footer").style.paddingTop = "325px";
        getUsers()
        document.querySelector(".scoreDisplay").style.display = "inline-block"
        document.querySelector(".leader").style.display = "block"
       
        
    }

    if(total === topScore){
        runningTotal.innerHTML = `Score: ${leaderBoard}` 
        fetchPostUsers()
        const audio = new Audio;
        audio.src ="./Audio/mixkit-circus-lose-2030.wav"
        audio.play()
        //clear the round and score so its wont be execute again
        round = 0
        result = []
        alert(document.querySelector(".result").innerHTML = "Better luck next time!!")
        find.style.display = "none"
        level.style.display ="none";
        remainingBox.style.display = "none";
        scoreDisplay.className = "scoring1"
        // document.querySelector(".total").innerHTML = `Score: ${total}`
        // document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        // document.querySelector(".mainDiv1").style.backgroundImage = "url(./gif/aipom_pokemon.gif)";
        // document.querySelector(".abra1").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
        document.querySelector(".modeDisplay").style.display = "none";
        // document.querySelector("footer").style.paddingTop = "325px";
        getUsers()
        document.querySelector(".scoreDisplay").style.display = "inline-block"
        document.querySelector(".leader").style.display = "block"
        
        
    }

}

   function level2(){

    // set the score to beat
    const topScore = 20;
    total = result.reduce((acc, curr)=> acc+curr, 0);
  
    if(total > topScore){
        const audio = new Audio;
        audio.src ="./Audio/mixkit-ethereal-fairy-win-sound-2019.wav"
        audio.play()
        alert(`Well done lets play next round!!`)
        //run reset table for next level
        resetTable()
        find1.style.display = "none";
        find2.style.display = "inline";
        num = num - 1;
        document.querySelector(".boxes2").style.display = "none"
        // document.querySelector(".boxes3").style.display = "block"
        pickBox = pickBox - 1;
        const remender = pickBox - count.length;
        remainingBox.innerHTML = `Pick left: ${remender}`
        round = round + 1;
        level.innerHTML= "Level: 3"
        // clear the score for next level
        result = [];
        // score.innerHTML = `Score: 0`
        // document.querySelector(".modeChange").style.display = "none"
        document.querySelector("footer").style.paddingTop = "125px";
    }

    if(total < topScore){
        runningTotal.innerHTML = `Score: ${leaderBoard}`
        fetchPostUsers()
       
        
        const audio = new Audio;
        audio.src ="./Audio/mixkit-circus-lose-2030.wav"
        audio.play()
        // clear the round so it wont be carried to next round. round stop here
        round = 0
        result = []
        find1.style.display = "none"
        document.querySelector(".result").innerHTML = "Better luck next time"
        level.style.display ="none"
        remainingBox.style.display = "none"
        scoreDisplay.className = "scoring1"
        // document.querySelector(".total").innerHTML = `Score: ${total}`
        // document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        // document.querySelector(".mainDiv1").style.backgroundImage = "url(./gif/pikachu.gif)";
        // document.querySelector(".abra1").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
        document.querySelector(".modeDisplay").style.display = "none";
        // document.querySelector("footer").style.paddingTop = "325px";
        getUsers()
        document.querySelector(".scoreDisplay").style.display = "inline-block"
        document.querySelector(".leader").style.display = "block"
       
        
    }

    if(total === topScore){
        runningTotal.innerHTML = `Score: ${leaderBoard}`
        fetchPostUsers()
    
       
        const audio = new Audio;
        audio.src ="./Audio/mixkit-circus-lose-2030.wav"
        audio.play()
        // round back to zero so wont be execute this function again 
        round = 0
        result = []
        find1.style.display = "none"
        document.querySelector(".result").innerHTML = "Better luck next time!!"
        level.style.display ="none"
        remainingBox.style.display = "none"
        scoreDisplay.className = "scoring1"
        // document.querySelector(".total").innerHTML = `Score: ${total}`
        // document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        // document.querySelector(".mainDiv1").style.backgroundImage = "url(./gif/aipom_pokemon.gif)";
        // document.querySelector(".abra1").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
        document.querySelector(".modeDisplay").style.display = "none";
        // document.querySelector("footer").style.paddingTop = "325px";
        getUsers()
        document.querySelector(".scoreDisplay").style.display = "inline-block"
        document.querySelector(".leader").style.display = "block"
        
        
    }
   

}


   function level3(){
    
    // set the score to beat
    const topScore = 30;
    total = result.reduce((acc, curr)=> acc+curr, 0);
    runningTotal.innerHTML = `Score: ${leaderBoard}`
    if(total > topScore){
        fetchPostUsers()
     
        
        const audio = new Audio;
        audio.src ="./Audio/mixkit-ethereal-fairy-win-sound-2019.wav"
        audio.play()
        // as this game upto 3 round so after this round this function wont be execute
        // bcoz round will be 0 which is less then round = 1;
        round = 0
        result = []
        find2.style.display = "none";
        num = num - 1;
        document.querySelector(".result").innerHTML = "Congratulation you are the winner"
        level.style.display ="none"
        remainingBox.style.display = "none"
        scoreDisplay.className = "scoring1"
        // document.querySelector(".total").innerHTML = `Score: ${total}`
        // document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        // document.querySelector(".mainDiv1").style.backgroundImage = "url(./gif/charmander_dancing.gif)";
        // document.querySelector(".abra1").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
        document.querySelector(".modeDisplay").style.display = "none";
        // document.querySelector("footer").style.paddingTop = "325px";
        getUsers()
        document.querySelector(".scoreDisplay").style.display = "inline-block"
        document.querySelector(".leader").style.display = "block"
        
    }

    if(total < topScore){
        fetchPostUsers()
    
    
        const audio = new Audio;
        audio.src ="./Audio/mixkit-circus-lose-2030.wav"
        audio.play()
        //round === 0 means its wont be execute again. Game over
        round = 0
        result = []
        find2.style.display = "none"
        document.querySelector(".result").innerHTML = "Better luck next time"
        level.style.display ="none"
        remainingBox.style.display = "none"
        scoreDisplay.className = "scoring1"
        // document.querySelector(".total").innerHTML = `Score: ${total}`
        // document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        // document.querySelector(".mainDiv1").style.backgroundImage = "url(./gif/pikachu.gif)";
        // document.querySelector(".abra1").style.display = "none"
        document.querySelector("body").style.backgroundColor ="cadetblue"
        document.querySelector(".modeDisplay").style.display = "none";
        // document.querySelector("footer").style.paddingTop = "325px";
        getUsers()
        document.querySelector(".scoreDisplay").style.display = "inline-block"
        document.querySelector(".leader").style.display = "block"
       
        
    }

    if(total === topScore){
        fetchPostUsers()

       
        const audio = new Audio;
        audio.src ="./Audio/mixkit-circus-lose-2030.wav"
        audio.play()
        round = 0
        result = []
        find2.style.display = "none"
        document.querySelector(".result").innerHTML = "Better luck next time!!"
        level.style.display ="none"
        remainingBox.style.display = "none"
        scoreDisplay.className = "scoring1"
        // document.querySelector(".endBtn").style.marginTop = "150px"
        document.querySelector(".heading").style.display = "none"
        document.querySelector(".divBox").style.display = "none"
        // document.querySelector(".mainDiv1").style.backgroundImage = "url(./gif/aipom_pokemon.gif)";
        document.querySelector("body").style.backgroundColor ="cadetblue"
        document.querySelector(".modeDisplay").style.display = "none";
        // document.querySelector("footer").style.paddingTop = "325px";
        getUsers()
        document.querySelector(".scoreDisplay").style.display = "inline-block"
        document.querySelector(".leader").style.display = "block"
        
    }
   

}


async function fetchPostUsers() {
  
    let response = await fetch(`http://localhost:5000/game`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: nameIn.value[0].toUpperCase() + nameIn.value.slice(1), score: leaderBoard }),
    });
    let data = await response.json();
    console.log("post data", data);
  }

 

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
    
 

  


