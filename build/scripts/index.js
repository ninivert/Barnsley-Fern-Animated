'use strict';

//
// Todo
//

// https://en.wikipedia.org/wiki/Barnsley_fern
// "Note that the complete fern is within the range −2.1820 < x < 2.6558 and 0 ≤ y < 9.9983."

//
// Canvas setup
//
var canvas = DOM.canvas;
var ctx = canvas.getContext('2d');

canvas.width = WIDTH;
canvas.height = HEIGHT;

// Center the canvas at the bottom center
ctx.translate(WIDTH * DWIDTH, HEIGHT * DHEIGHT);

ctx.fillStyle = '#218c74';

// Bop it
// Twist it
// Start it
var FRAMES = 0;
var CYCLE = 0;
var RUNNING = true;
var NEXTFRAME = requestAnimationFrame(function () {
    drawFern();
    drawText();
});