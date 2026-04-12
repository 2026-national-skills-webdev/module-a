let files = []
let current = {}

$('input').addEventListener('input', (e) => {
    files = e.target.files
    render()
})

function render() {
    [...files].forEach((file, i) => {
        const li = document.createElement('li')
        li.textContent = `${file.name} (${(file.size / 1024).toFixed(1)}KB)`
        li.draggable = true

        li.addEventListener('dragstart', (e) => {
            // ul의 자식 요소 중 li의 현재 위치(index)를 반환
            current = { element: li, index: [...$('ul').children].indexOf(li) }
        })

        li.addEventListener('dragover', (e) => {
            e.preventDefault()
        })

        li.addEventListener('drop', (e) => {
            let targetElement = current.index > [...$('ul').children].indexOf(li) ? li : li.nextSibling
            // 부모요소.insertBefore(넣을요소, 기준요소)
            $('ul').insertBefore(current.element, targetElement)
        })

        $('ul').append(li)
    })
}

const dragBox = $('.drag-box')
dragBox.addEventListener('dragover', (e) => {
    e.preventDefault()
})
dragBox.addEventListener('drop', (e) => {
    e.preventDefault()
    files = e.dataTransfer.files
    render()
})