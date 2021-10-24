console.log("Welcome to zero cutta game")
let music = new Audio("godfather_guitar.mp3")
let audioTurn = new Audio("beep.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
alert('start game');
function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}

// change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

//  check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('text');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.information').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "300px";
            document.querySelector('.fire').getElementsByTagName('img')[0].style.width = "300px";
            document.querySelector(".cut").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".cut").style.width = "20vw";
            gameover.play();
            music.pause();
            
           
           
        }
    })
}

// how logic is working
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.text');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            music.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("information")[0].innerText  = "Turn for " + turn;
               
            } 
        }
    })
})

// button working
 reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    
    });
    // music.currentTime=0;
    turn = "X"; 
    isgameover = false
    document.querySelector(".cut").style.width = "0vw";
    document.getElementsByClassName("information")[0].innerText  = "Turn for " + turn;
    document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.fire').getElementsByTagName('img')[0].style.width = "0px"
   alert('play again');
   window.onload = timedRefresh(1000);
})

