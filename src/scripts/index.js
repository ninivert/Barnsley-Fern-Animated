//
// Todo
//

// https://en.wikipedia.org/wiki/Barnsley_fern
// "Note that the complete fern is within the range −2.1820 < x < 2.6558 and 0 ≤ y < 9.9983."

//
// Canvas setup
//
const canvas = DOM.canvas
const ctx = canvas.getContext('2d')

canvas.width = WIDTH
canvas.height = HEIGHT

// Center the canvas at the bottom center
ctx.translate(WIDTH*DWIDTH, HEIGHT*DHEIGHT)

ctx.fillStyle = '#218c74'

// Bop it
// Twist it
// Start it
let FRAMES = 0
let CYCLE = 0
let RUNNING = true
let NEXTFRAME = requestAnimationFrame(function() {
    drawFern()
    drawText()
})
