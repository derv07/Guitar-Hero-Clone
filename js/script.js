const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const game = new Game(ctx)

const startBtn = document.getElementById("start-btn")
startBtn.onclick = () => {
    game.start()
    notesDisplay.style.display = 'block'
}

// TODO: -Reestructurar funcion de presionar las teclas en base si ya esta presionada o no con onKeyEvent(event.type)

