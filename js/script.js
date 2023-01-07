const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const startBtn = document.getElementById("start-btn")
startBtn.onclick = () => {
    const game = new Game(ctx)
    game.start()
    document.getElementById("instruction").style.display = "none"
    gameCanvas.style.display = "block"
    comboDisplay.style.display = "block"
    scoreDisplay.style.display = "block"
    multiplierDisplay.style.display = "block"
    startBtn.style.display = "none"
    title.style.display = "none"
}

const restartBtn = document.getElementById("restart-btn")
restartBtn.style.display = "none"
endScore.style.display = "none"
restartBtn.onclick = () => {
    const game = new Game(ctx)
    game.start()
    gameCanvas.style.display = "block"
    comboDisplay.style.display = "block"
    scoreDisplay.style.display = "block"
    multiplierDisplay.style.display = "block"
    restartBtn.style.display = "none"
    title.style.display = "none"
    endScore.style.display = "none"
    endScore.classList.remove("endScore")
    container.style.display = "flex"
    scoreDisplay.innerText = "Score: 0"
    comboDisplay.innerText = "Streak: 0"
    multiplierDisplay.innerText = "Combo: x1"
}




