"use strict";

var TRANSFORMATIONS = [{
    dot: new Matrix({ matrix: [[0.00, 0.00], [0.00, 0.16]] }),
    add: new Matrix({ matrix: [[0.00], [0.00]] })
}, {
    dot: new Matrix({ matrix: [[0.85, 0.04], [-0.04, 0.85]] }),
    add: new Matrix({ matrix: [[0.00], [1.60]] })
}, {
    dot: new Matrix({ matrix: [[0.20, -0.26], [0.23, 0.22]] }),
    add: new Matrix({ matrix: [[0.00], [1.60]] })
}, {
    dot: new Matrix({ matrix: [[-0.15, 0.28], [0.26, 0.24]] }),
    add: new Matrix({ matrix: [[0.00], [0.44]] })
}];

//
// ...
//

var coords = new Matrix({ matrix: [[0], [0]] });

// ... lööps bröther

// Apply transformation
coords = Matrix.add(Matrix.dot(tf.dot, coords), tf.add);