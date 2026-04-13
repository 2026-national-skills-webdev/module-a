const $ = (q) => document.querySelector(q)
const $$ = (q) => [...document.querySelectorAll(q)]

let currentYear = new Date().getFullYear()
let currentMonth = new Date().getMonth() + 1

function render() {
    $('.text-1').textContent = `${currentYear}년 ${currentMonth}월`
    $('.tbody').innerHTML = ''

    for (let i = 0; i < new Date(currentYear, currentMonth - 1, 1).getDay(); i++) {
        const div = document.createElement('div')

        $('.tbody').append(div)
    }

    for (let i = 0; i < new Date(currentYear, currentMonth, 0).getDate(); i++) {
        const div = document.createElement('div')
        div.classList.add('day')
        div.textContent = i + 1
        if (new Date().getFullYear() === currentYear && new Date().getMonth() + 1 === currentMonth && new Date().getDate() === i + 1) div.classList.add('today')

        $('.tbody').append(div)
    }
}

$('.button.previous').onclick = () => {
    currentMonth--
    if (currentMonth === 0) {
        currentMonth = 12
        currentYear--
    }

    render()
}

$('.button.next').onclick = () => {
    currentMonth++
    if (currentMonth === 13) {
        currentMonth = 1
        currentYear++
    }
    
    render()
}

render()