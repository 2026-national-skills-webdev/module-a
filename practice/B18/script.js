const canvas = $('canvas')
const ctx = canvas.getContext('2d')
let imageElement = null
let rotation = 0
let flip = { x: 1, y: 1 }
let isGrayscale = false

function render() {
    if (!imageElement) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.filter = isGrayscale ? 'grayscale(100%)' : 'none'
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.scale(flip.x, flip.y)
    ctx.rotate(rotation)
    ctx.drawImage(imageElement, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
    ctx.restore()
}

$('input[type="file"]').addEventListener('change', (e) => {
    imageElement = new Image()
    imageElement.src = URL.createObjectURL(e.target.files[0])
    imageElement.onload = render
})

$$('button').forEach((button, idx) => {
    button.onclick = () => {
        if (idx === 0) rotation -= Math.PI / 2
        else if (idx === 1) rotation += Math.PI / 2
        else if (idx === 2) flip.x *= -1
        else if (idx === 3) flip.y *= -1
        else if (idx === 4) isGrayscale = !isGrayscale
        else if (idx === 5) {
            rotation = 0
            flip = { x: 1, y: 1 }
            isGrayscale = false
        } else if (idx === 6) {
            const a = document.createElement('a')
            a.href = canvas.toDataURL()
            a.download = 'image.png'
            a.click()
        }

        render()
    }
})