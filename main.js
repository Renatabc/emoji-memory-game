const emojis = [
    "❤",
    "❤",
    "😍",
    "😍",
    "😒",
    "😒",
    "😁",
    "😁",
    "😉",
    "😉",
    "😎",
    "😎",
    "😜",
    "😜",
    "💩",
    "💩",
    "🤡",
    "🤡",
    "🥳",
    "🥳"
];
let openCards = [];
let shuffleEmojis = emojis.sort(() =>(Math.random() > 0.5) ? 2: -1);

//criação das caixinhas
for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

//clique
function handleClick(){
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }

    playSound();
}

//efeito sonoro
function playSound(){
    let audio = new Audio("./assets/cartoon_wink_magic_sparkle-6896.mp3");
    audio.play();
}

//cartas iguais ou não
function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    //fim do jogo
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Parabéns! Você conseguiu!");
    }
}