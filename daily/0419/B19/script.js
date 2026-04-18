const $ = q => document.querySelector(q)
const $$ = q => [...document.querySelectorAll(q)]

let year = new Date().getFullYear()
let month = new Date().getMonth() // 원래 달에 -1된 값

function render() {
    $('.tbody').innerHTML = ''
    $('.text-1').textContent = `${year}년 ${month + 1}월`

    for (let i = 0; i < new Date(year, month, 1).getDay(); i++) {
        const div = document.createElement('div')

        $('.tbody').append(div)
    }

    for (let i = 0; i < new Date(year, month + 1, 0).getDate(); i++) {
        const div = document.createElement('div')
        div.textContent = i + 1
        new Date().getFullYear() === year && new Date().getMonth() === month && i + 1 === new Date().getDate() ? div.classList.add('today') : div.classList.add('day')

        $('.tbody').append(div)
    }
}

$('#previous').onclick = () => {
    month--
    if (month === -1) {
        month = 11
        year--
    }

    render()
}

$('#next').onclick = () => {
    month++
    if (month === 12) {
        month = 0
        year++
    }

    render()
}

render()