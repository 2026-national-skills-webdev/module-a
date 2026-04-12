let currentYear = 2026
let currentMonth = 4

function render() {
    $('.tbody').innerHTML = ''

    $('.group-1 .text-1').textContent = `${currentYear}년 ${currentMonth}월`

    for (let i = 0; i < new Date(currentYear, currentMonth - 1, 1).getDay(); i++) {
        const div = document.createElement('div')
        $('.tbody').append(div)
    }

    for (let i = 0; i < new Date(currentYear, currentMonth, 0).getDate(); i++) {
        const div = document.createElement('div')
        div.classList.add('day')
        div.textContent = i + 1
        if (currentYear === new Date().getFullYear() && currentMonth - 1 === new Date().getMonth() && i + 1 === new Date().getDate()) {
            div.classList.add('today')
        }

        $('.tbody').append(div)
    }
}

function controlDate() {
    if (currentMonth === 0) {
        currentYear--
        currentMonth = 12
    } else if (currentMonth === 13) {
        currentYear++
        currentMonth = 1
    }
}

$('.button.previous').onclick = () => {
    currentMonth--
    controlDate()
    render()
}

$('.button.next').onclick = () => {
    currentMonth++
    controlDate()
    render()
}

render()