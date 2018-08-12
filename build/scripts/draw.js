'use strict';

function drawFern() {
    // Clear the canvas
    ctx.clearRect(-WIDTH * DWIDTH, -HEIGHT * DHEIGHT, WIDTH, HEIGHT);

    // Init the coords
    var coords = [0, 0];

    // Generate the coefficients for this frame
    var progress = (Math.cos(FRAMES * SPEED * Math.PI) + 1) / 2;
    var coefs = [];
    var coefs1 = FERNS[CYCLE % FERNS.length].coefs;
    var coefs2 = FERNS[(CYCLE + 1) % FERNS.length].coefs;
    for (var i = 0; i < coefs1.length; i++) {
        coefs[i] = [];
        for (var j = 0; j < coefs1[i].length; j++) {
            coefs[i][j] = coefs1[i][j] * progress + coefs2[i][j] * (1 - progress);
        }
    }

    // Switch the cycle every multiple of PI
    if (FRAMES * SPEED === 1) {
        FRAMES = 0;
        CYCLE += 1;
        drawText();
    }

    // Draw the fern
    for (var _i = 0; _i < ITERATIONS; _i++) {
        // Choose a transformation
        var p = Math.random();
        var sum = 0;
        for (var _j = 0; _j < coefs.length; _j++) {
            sum += coefs[_j][6];
            if (p < sum) {
                // Perform tranformation on the coordinates
                coords = transform(coords, coefs[_j]);
                break;
            }
        }

        // Dräw, bröther
        // Taking the opposite of the y coordinate so that the fern is not upside down
        // coefs[7] is a custom scaling factor
        ctx.beginPath();
        ctx.arc(coords[0] * ZOOM * coefs[0][7], -coords[1] * ZOOM * coefs[0][7], 1, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Request next
    FRAMES += 1;
    NEXTFRAME = requestAnimationFrame(drawFern);
}

function transform(coords, coefs) {
    return [coefs[0] * coords[0] + coefs[1] * coords[1] + coefs[4], coefs[2] * coords[0] + coefs[3] * coords[1] + coefs[5]];
}

function drawText() {
    var index = (CYCLE + 1) % FERNS.length;
    DOM.controls.current.innerHTML = FERNS[index].name;
    DOM.controls.scaling.innerHTML = FERNS[index].coefs[0][7];
    var coefs = FERNS[index].coefs;
    var matrix = 'a      b      c      d      f      e      p     <br>';
    for (var i = 0; i < coefs.length; i++) {
        for (var j = 0; j < coefs[i].length - 1; j++) {
            if (coefs[i][j] >= 0) matrix += '+';
            matrix += coefs[i][j].toFixed(3) + ' ';
        }
        matrix += '<br>';
        // matrix += `${coefs[i].join(' ')}<br>`
    }
    DOM.controls.matrix.innerHTML = matrix;
}