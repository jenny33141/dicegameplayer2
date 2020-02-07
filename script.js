const diceTotal = document.getElementById("total")
const totalP2 = document.getElementById("totalP2")
const playAgain = document.getElementById("playAgain")
const rollButton = document.getElementById("rollButton")
const diceImage = document.getElementById("diceImage")
const textBox = document.getElementById("textBox")
let diceTotal1 = 0
let diceTotal2 = 0

let total = 0
let checker = true
let num = 0

const diceRoll = () => {
    const num = Math.floor(Math.random() * 6 + 1)
    console.log (num)
if (num === 1 ) {
    diceImage.src ="img/dice1.png"
    rollButton.disabled = true
    if (checker) {
        textBox.textContent = "Player 1 you lose!"}
        else{
            textBox.textContent ="Player 2 you lose!"
        }
    checker = !checker
    return 0
    
}else if (num === 2) {
    diceImage.src ="img/dice2.png"
    checker = !checker
    return 2
}else if (num === 3) {
    diceImage.src ="img/dice3.png"
    checker = !checker
    return 3
}else if (num === 4) {
    diceImage.src ="img/dice4.png"
    checker = !checker
    return 4
}else if (num === 5) {
    diceImage.src ="img/dice5.png"
    checker = !checker
    return 5
}else if (num === 6) {
    diceImage.src ="img/dice6.png"
    checker = !checker
    return 6
}


}


const gameLogic = () => {
    if (diceTotal1 > 20) {
        rollButton.disabled = true
       
       
       textBox.textContent = "Player1 you win!"
    }
    if (diceTotal2 > 20) {
        rollButton.disabled = true
    //    diceTotal1 = 0
    //    diceTotal2 = 0
       textBox.textContent = "Player2 you win!"
    }
//    if (num === 1 ) {
//     rollButton.disabled = true
//     textBox.textContent = "Player 1 You lose!"
       
     }




    


rollButton.addEventListener("click", () => {
    diceImage.style.display = "block"
   
    if(checker)  {
    let result = diceRoll();
      diceTotal1 += result
      gameLogic()
      diceTotal.textContent = diceTotal1
     } else{
      diceTotal2 += diceRoll();
      totalP2.textContent = diceTotal2
     }
      
    })

    
    playAgain.addEventListener("click", () => {
        textBox.textContent = "Lets play"
        rollButton.disabled = false
        diceImage.style.display = "none"
        diceTotal.textContent = 0
        totalP2.textContent = 0
        diceTotal1 = 0
        diceTotal2 = 0

     })
        

     