const $ = q => document.querySelector(q)
let files
let current

function render() {
    [...files].forEach(file => {
        const li = document.createElement('li')
        li.textContent = `${file.name}, ${(file.size / 1024).toFixed(1)}KB`
        li.draggable = true

        li.ondragstart = (e) => current = { el: li, idx: [...$('ul').children].indexOf(li) }
        li.ondragover = (e) => e.preventDefault()
        li.ondrop = (e) => {
            const targetEl = current.idx < [...$('ul').children].indexOf(li) ? li.nextSibling : li
            $('ul').insertBefore(current.el, targetEl)
        }

        $('ul').append(li)
    })
}

$('#fileInput').oninput = (e) => {
    files = e.target.files
    render()
}
$('label').ondragover = (e) => e.preventDefault()
$('label').ondrop = (e) => {
    e.preventDefault()
    files = e.dataTransfer.files
    render()
}