const $ = (q) => document.querySelector(q)
const $$ = (q) => [...document.querySelectorAll(q)]
let files, current

function render() {
    [...files].forEach(file => {
        const li = document.createElement('li')
        li.textContent = `${file.name} ${(file.size / 1024).toFixed(1)}KB`
        li.draggable = true
        li.addEventListener('dragstart', (e) => {
            current = { element: li, idx: [...$('ul').children].indexOf(li) }
        })

        li.addEventListener('dragover', (e) => {
            if (li !== current.element) e.preventDefault()
        })

        li.addEventListener('drop', (e) => {
            const targetElement = current.idx < [...$('ul').children].indexOf(li) ? li.nextSibling : li
            $('ul').insertBefore(current.element, targetElement)
        })

        $('ul').append(li)
    })
}

$('#fileInput').addEventListener('change', (e) => {
    files = e.target.files
    render()
})

$('label').addEventListener('dragover', (e) => e.preventDefault())
$('label').addEventListener('drop', (e) => {
    e.preventDefault()
    files = e.dataTransfer.files
    render()
})