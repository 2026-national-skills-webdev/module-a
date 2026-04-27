const $ = q => document.querySelector(q)
const $$ = q => [...document.querySelectorAll(q)]
let files, current

function render() {
    [...files].forEach(file => {
        const li = document.createElement('li')
        li.draggable = true
        li.textContent = `${file.name} (${(file.size / 1024).toFixed(1)}KB)`

        li.addEventListener('dragstart', (e) => {
            li.classList.add('active')
            current = { element: li, idx: [...$('ul').children].indexOf(li) }
        })
        li.addEventListener('dragend', (e) => li.classList.remove('active'))
        li.addEventListener('dragover', (e) => {
            if (current.element !== li) e.preventDefault()
        })
        li.addEventListener('drop', (e) => {
            e.preventDefault()
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

$('label').addEventListener('dragover', (e) => {
    e.target.classList.add('active')
    e.preventDefault()
})
$('label').addEventListener('dragleave', (e) => e.target.classList.remove('active'))
$('label').addEventListener('drop', (e) => {
    e.target.classList.remove('active')
    e.preventDefault()
    files = e.dataTransfer.files
    
    render()
})