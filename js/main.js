const puzzleBoard = document.getElementById("puzzle")
const solveButton = document.getElementById("solve-button")
const squares = 81
const submission = []

for(let i = 0; i < squares; i++) {
    const inputElement = document.createElement("input")

    inputElement.setAttribute("type", "number")
    inputElement.setAttribute("min", "1")
    inputElement.setAttribute("max", "9")

    puzzleBoard.appendChild(inputElement)
}

const joinValue = () => {
    const userInput = document.querySelectorAll("input");
    userInput.forEach(userInput => {
        if(userInput.value) {
            submission.push(userInput.value)
        } else {
            submission.push(".")
        }
    })
    // console.log(submission)
}

const solve = () => {

}

solveButton.addEventListener("click", joinValue)