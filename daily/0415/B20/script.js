const $ = q => document.querySelector(q)
const $$ = q => [...document.querySelectorAll(q)]
const cells = $$('.cell')
const winningPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let initialBoard = ['', '', '', '', '', '', '', '', '']
let board = [...initialBoard]
let currentPlayer = 'x'
let isOver = false

function render() {
    board.forEach((cell, idx) => {
        cells[idx].classList.remove('o', 'x')
        cells[idx].textContent = cell.toUpperCase()

        if (cell) cells[idx].classList.add(cell)
    })
}

function checkWinner() {
    if (winningPattern.some(pattern => pattern.every(idx => board[idx] === currentPlayer))) {
        alert(`${currentPlayer.toUpperCase()}가 승리하였습니다`)
        isOver = true
    } else if (board.every(cell => cell)) {
        alert('무승부 입니다')
        isOver = true
    }
}

cells.forEach((cell, idx) => {
    cell.onclick = () => {
        if (board[idx] || isOver) return
        board[idx] = currentPlayer

        render()
        checkWinner()
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x'
    }
})

$('#resetGame').onclick = () => {
    board = [...initialBoard]
    currentPlayer = 'x'
    isOver = false

    render()
}

render()