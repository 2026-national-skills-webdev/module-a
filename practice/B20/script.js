// let currentPlayer = 'x'
// let isOver = false
// let currentCells = { playerO: [], playerX: [] }
// let winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

// function render(cell, idx) {
//     if (cell.classList.contains('o') || cell.classList.contains('x')) return
//     cell.classList.add(currentPlayer)
//     cell.textContent = currentPlayer.toUpperCase()
//     currentPlayer == 'o' ? currentCells.playerO.push(idx) : currentCells.playerX.push(idx)

//     handleToCheck()

//     currentPlayer = currentPlayer == 'o' ? 'x' : 'o'
// }

// function handleToCheck() {
//     if (winningPatterns.some(pattern => pattern.every(num => currentCells[currentPlayer == 'o' ? 'playerO' : 'playerX'].includes(num)))) {
//         alert(currentPlayer == 'o' ? '플레이어 O 승리!' : '플레이어 X 승리!')
//         isOver = true
//         return
//     }
//     if (currentCells.playerO.length + currentCells.playerX.length == 9) {
//         alert('무승부!')
//     }
// }

// $$('.cell').forEach((cell, idx) => {
//     cell.addEventListener('click', () => {
//         if (isOver) return
//         render(cell, idx)
//     })
// })

// 상태기반패턴
const winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [2, 5, 8], [1, 4, 7]]
const initialBoard = ['', '', '', '', '', '', '', '', '']

function createState(initialState) {
    let state = initialState

    return {
        getState: () => state,
        setState: (newState) => {
            state = { ...state, ...newState }
        }
    }
}

function render(state) {
    const cells = $$('.cell')

    state.board.forEach((board, idx) => {
        cells[idx].classList.remove('o', 'x')
        cells[idx].textContent = ''
        if (board == '') return
        cells[idx].classList.add(board)
        cells[idx].textContent = board.toUpperCase()
    })
}

function checkWinner(state) {
    const { board, currentPlayer } = state
    if (winningPatterns.some(pattern => pattern.every(idx => board[idx] === currentPlayer))) {
        alert(`${currentPlayer.toUpperCase()}가 승리하였습니다`)
        store.setState({ isOver: true })
    } else if (board.every(cell => cell !== '')) {
        alert('무승부입니다')
        store.setState({ isOver: true })
    }
}

$$('.cell').forEach((cell, idx) => {
    cell.onclick = () => {
        const { board, currentPlayer, isOver } = store.getState()
        if (isOver) return alert('이미 게임이 끝났습니다.')
        if (board[idx] !== '') return
        const newBoard = [...board]
        newBoard[idx] = currentPlayer
        store.setState({ board: newBoard })
        render(store.getState())
        checkWinner(store.getState())
        store.setState({ currentPlayer: currentPlayer === 'x' ? 'o' : 'x' })
    }
})

$('#resetGame').onclick = () => {
    store.setState({
        board: [...initialBoard],
        currentPlayer: 'x',
        isOver: false,
    })

    render(store.getState())
}

const store = createState({
    board: initialBoard,
    currentPlayer: 'x',
    isOver: false,
})

render(store.getState())