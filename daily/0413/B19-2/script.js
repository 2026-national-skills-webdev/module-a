const $ = (q) => document.querySelector(q)
const $$ = (q) => [...document.querySelectorAll(q)]
let year = new Date().getFullYear()
let month = new Date().getMonth()

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
        div.classList.add('day')
        if (year === new Date().getFullYear() && month === new Date().getMonth() && i + 1 == new Date().getDate()) div.classList.add('today')

        $('.tbody').append(div)
    }
}

$('.button.previous').onclick = () => {
    month--
    if (month === -1) {
        year--
        month = 11
    }

    render()
}

$('.button.next').onclick = () => {
    month++
    if (month === 12) {
        year++
        month = 0
    }

    render()
}

render()