let playerEl = document.getElementById("player-el")
let player = {
  name: "Naptrix",
  chips: getRandom()*getRandom()+3*getRandom()
}
playerEl.textContent = player.name + ": $"+player.chips 
let cards = []
let sumEl = 0
let hasBJ = false
let isAlive = false
console.log(sumEl)
let message =''
let messageEl = document.getElementById("message-el")
let cardsEl= document.querySelector("#cards")

let wins = 0//JSON.parse(localStorage.getItem("wins"))
let losses = 0

if (localStorage.getItem("wins")){
  wins = JSON.parse(localStorage.getItem("wins"))
  renderWLs()
}
if (localStorage.getItem("losses")){
  losses = JSON.parse(localStorage.getItem("losses"))
  renderWLs()
}

function getRandom(){
  let random=Math.floor(Math.random()*13+1)
  if (random===1){
    return 11
  }
  else if (random > 10){
  return 10
  }
  else {
    return random
  }
}

function startGame(){
  isAlive= true
  
  let firstCard= getRandom()
  let secondCard= getRandom()
  cards=[firstCard,secondCard]

  sumEl = firstCard+secondCard
  renderGame()
}

function renderGame(){{{
  document.getElementById("sum-el").textContent= "Sum: " + sumEl
  cardsEl.textContent = "Cards: "}
  
  for (let i=0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " "
  }
  }

if (sumEl < 21 && sumEl > 0) {
 message = 'Do you want yo draw another card?🤔'
 
 
}
else if (sumEl === 21) {
  hasBJ = true
  message ="Woohoo! You've got blackjack!😱"
  window.alert("Congratulations! ")
  wins+=1
  localStorage.setItem("wins",wins)
  
}
else if (sumEl > 21) {
  isAlive=false
  message = 'Gerara here 😂👉'}
  messageEl.innerText= message
if (isAlive === false){
  losses += 1
  localStorage.setItem("losses",losses)
}
}
  
function drawcard(){
  if (isAlive === true && hasBJ==false){
  sumEl += getRandom()
  cards.push(getRandom())
  renderGame()
  console.log("drawing a card " + cards)}
}


function renderWLs(){
  let winS = document.getElementById("wins")
   winS.textContent = "Wins: "+ wins+ " 😎"
  let losseS = document.getElementById("losses")
  losseS.textContent = "Losses: "+ losses + " 😭"
   console.log(wins)
}

if ((losses/wins) > 20){
  document.getElementById("tip").innerText = "GET SOME HELP 💀"
}
