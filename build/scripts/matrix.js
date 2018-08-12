'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Matrix = function () {
    function Matrix() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$matrix = _ref.matrix,
            matrix = _ref$matrix === undefined ? [] : _ref$matrix,
            _ref$width = _ref.width,
            width = _ref$width === undefined ? 2 : _ref$width,
            _ref$height = _ref.height,
            height = _ref$height === undefined ? 2 : _ref$height;

        _classCallCheck(this, Matrix);

        if (matrix.length === 0) {
            // Generate matrix from height and width
            this.matrix = [];
            this.height = height;
            this.width = width;

            for (var i = 0; i < this.height; i++) {
                this.matrix.push([]);
                for (var j = 0; j < this.width; j++) {
                    this.matrix[i].push(0);
                }
            }
        } else {
            // Generate matrix from array
            // I could check that it is valid, but eh
            this.matrix = matrix;
            this.height = this.matrix.length;
            this.width = this.matrix[0].length;
        }
    }

    _createClass(Matrix, [{
        key: 'log',
        value: function log() {
            console.log(this.matrix);
        }
    }, {
        key: 'map',
        value: function map(fn) {
            var n = 0;
            for (var i = 0; i < this.height; i++) {
                for (var j = 0; j < this.width; j++) {
                    this.matrix[i][j] = fn(this.matrix[i][j], n);
                    n++;
                }
            }
        }
    }], [{
        key: 'add',
        value: function add(m1, m2) {
            // Matrixes are incompatible
            if (m1.width !== m2.width || m1.height !== m2.height) {
                throw 'Incompatible matrices';
            }

            var result = new Matrix({ height: m1.height, width: m1.width });

            for (var i = 0; i < result.height; i++) {
                for (var j = 0; j < result.width; j++) {
                    result.matrix[i][j] = m1.matrix[i][j] + m2.matrix[i][j];
                }
            }

            return result;
        }
    }, {
        key: 'subtract',
        value: function subtract(m1, m2) {
            // Matrixes are incompatible
            if (m1.width !== m2.width || m1.height !== m2.height) {
                throw 'Incompatible matrices';
            }

            var result = new Matrix({ height: m1.height, width: m1.width });

            for (var i = 0; i < result.height; i++) {
                for (var j = 0; j < result.width; j++) {
                    result.matrix[i][j] = m1.matrix[i][j] - m2.matrix[i][j];
                }
            }

            return result;
        }
    }, {
        key: 'dot',
        value: function dot(m1, m2) {
            if (m1.width !== m2.height) {
                throw 'Incompatible matrices';
            }

            var result = new Matrix({ height: m1.height, width: m2.width });
            var size = m1.width; // equal to m.height
            var sum = void 0;

            for (var i = 0; i < result.height; i++) {
                for (var j = 0; j < result.width; j++) {
                    sum = 0;
                    for (var n = 0; n < size; n++) {
                        sum += m1.matrix[i][n] * m2.matrix[n][j];
                    }
                    result.matrix[i][j] = sum;
                }
            }

            return result;
        }
    }, {
        key: 'transpose',
        value: function transpose(m) {
            var result = new Matrix({ height: m.width, width: m.height });

            for (var i = 0; i < m.height; i++) {
                for (var j = 0; j < m.width; j++) {
                    result.matrix[j][i] = m.matrix[i][j];
                }
            }

            return result;
        }
    }]);

    return Matrix;
}();

// Tests
// console.clear()
// let m1 = new Matrix({height: 3, width: 3})
// let m2 = new Matrix({height: 3, width: 2})
// m1.map((x, i) => i+1)
// m2.map((x, i) => i+7)
// m1.log()
// m2.log()
// m1.dot(m2)
// m1.log()
// m2.transpose()
// m2.log()