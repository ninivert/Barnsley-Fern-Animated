'use strict';

// Fern transform matrices source
// https://www.chradams.co.uk/fern/maker.html
// Added a scaling factor as the last coefficient
var FERNS = [{
    name: 'Barnsley fern',
    coefs: [[0, 0, 0, 0.16, 0, 0, 0.01, 1], [0.85, 0.04, -0.04, 0.85, 0, 1.6, 0.85, 1], [0.2, -0.26, 0.23, 0.22, 0, 1.6, 0.07, 1], [-0.15, 0.28, 0.26, 0.24, 0, 0.44, 0.07, 1]]
},
// {
//     name: 'Cyclosorus',
//     coefs: [[0, 0, 0, 0.25, 0, -0.4, 0.02, 1.2],
//         [0.95, 0.005, -0.005, 0.93, -0.002, 0.5, 0.84, 1.2],
//         [0.035, -0.2, 0.16, 0.04, -0.09, 0.02, 0.07, 1.2],
//         [-0.04, 0.2, 0.16, 0.04, 0.083, 0.12, 0.07, 1.2]]
// },
// {
//     name: 'Modified Barnsley fern',
//     coefs: [[0, 0, 0, 0.2, 0, -0.12, 0.01, 1],
//         [0.845, 0.035, -0.035, 0.82, 0, 1.6, 0.85, 1],
//         [0.2, -0.31, 0.255, 0.245, 0, 0.29, 0.07, 1],
//         [-0.15, 0.24, 0.25, 0.20, 0, 0.68, .07, 1]]
// },
{
    name: 'Cultica',
    coefs: [[0, 0, 0, 0.25, 0, -0.14, 0.02, 1], [0.85, 0.02, -0.02, 0.83, 0, 1, 0.84, 1], [0.09, -0.28, 0.3, 0.11, 0, 0.6, 0.07, 1], [-0.09, 0.28, 0.3, 0.09, 0, 0.7, 0.07, 1]]
}, {
    name: 'Fishbone',
    coefs: [[0, 0, 0, 0.25, 0, -0.4, 0.02, 1.2], [0.95, 0.002, -0.002, 0.93, -0.002, 0.5, 0.84, 1.2], [0.035, -0.11, 0.27, 0.01, -0.05, 0.005, 0.07, 1.2], [-0.04, 0.11, 0.27, 0.01, 0.047, 0.06, 0.07, 1.2]]
}, {
    name: 'Fractal tree',
    coefs: [[0, 0, 0, 0.5, 0, 0, 0.05, 16], [0.42, -0.42, 0.42, 0.42, 0, 0.2, 0.4, 16], [0.42, 0.42, -0.42, 0.42, 0, 0.2, 0.4, 16], [0.1, 0, 0, 0.1, 0, 0.2, 0.15, 16]]
}, {
    name: 'Golden Bee',
    coefs: [[0.6178, 0, 0, -0.6178, 0, 1, 0.5, 6], [0, -0.786, 0.786, 0, 0.786, 0, 0.5, 6], [0, 0, 0, 0, 0, 0, 0, 6], [0, 0, 0, 0, 0, 0, 0, 6]]
}];

var ZOOM = 18;
var ITERATIONS = 1e3;
var WIDTH = 250,
    HEIGHT = 200;
var DWIDTH = 0.5,
    DHEIGHT = 0.95;
var SPEED = 1 / 150;

var DOM = {
    canvas: document.getElementById('canvas'),
    controls: {
        current: document.getElementById('current'),
        iterations: document.getElementById('iterations'),
        scaling: document.getElementById('scaling'),
        pause: document.getElementById('pause'),
        matrix: document.getElementById('matrix')
    }
};