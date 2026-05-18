const $ = q => document.querySelector(q)
const $$ = q => [...document.querySelectorAll(q)]

let year = new Date().getFullYear()
let month = new Date().getMonth() + 1

console.log(month)

function render() {
    $('.tbody').innerHTML = ''

    $('.info').textContent = `${year}년 ${month}월`

    for (let i = 0; i < new Date(year, month - 1, 1).getDay(); i++) {
        const div = document.createElement('div')
        
        $('.tbody').append(div)
    }

    for (let i = 0; i < new Date(year, month, 0).getDate(); i++) {
        const div = document.createElement('div')
        div.classList.add('day')
        div.textContent = i + 1

        $('.tbody').append(div)
    }
}

$$('button').forEach((button, idx) => {
    button.onclick = () => {
        if (idx === 0) {
            month--
            
            if (month === 0) {
                year--
                month = 12
            }
        }

        if (idx === 1) {
            month++
            
            if (month === 13) {
                year++
                month = 1
            }
        }

        render()
    }
})

render()