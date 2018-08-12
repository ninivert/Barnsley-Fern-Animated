class Matrix {
    constructor ({matrix = [], width = 2, height = 2} = {}) {
        if (matrix.length === 0) {
            // Generate matrix from height and width
            this.matrix = []
            this.height = height
            this.width = width

            for (let i=0; i<this.height; i++) {
                this.matrix.push([])
                for (let j=0; j<this.width; j++) {
                    this.matrix[i].push(0)
                }
            }
        } else {
            // Generate matrix from array
            // I could check that it is valid, but eh
            this.matrix = matrix
            this.height = this.matrix.length
            this.width = this.matrix[0].length
        }

    }

    log() {
        console.log(this.matrix)
    }

    map(fn) {
        let n = 0
        for (let i=0; i<this.height; i++) {
            for (let j=0; j<this.width; j++) {
                this.matrix[i][j] = fn(this.matrix[i][j], n)
                n++
            }
        }
    }

    static add(m1, m2) {
        // Matrixes are incompatible
        if (m1.width !== m2.width || m1.height !== m2.height) {
            throw 'Incompatible matrices'
        }

        let result = new Matrix({height: m1.height, width: m1.width})

        for (let i=0; i<result.height; i++) {
            for (let j=0; j<result.width; j++) {
                result.matrix[i][j] = m1.matrix[i][j] + m2.matrix[i][j]
            }
        }

        return result
    }

    static subtract(m1, m2) {
        // Matrixes are incompatible
        if (m1.width !== m2.width || m1.height !== m2.height) {
            throw 'Incompatible matrices'
        }

        let result = new Matrix({height: m1.height, width: m1.width})

        for (let i=0; i<result.height; i++) {
            for (let j=0; j<result.width; j++) {
                result.matrix[i][j] = m1.matrix[i][j] - m2.matrix[i][j]
            }
        }

        return result
    }

    static dot(m1, m2) {
        if (m1.width !== m2.height) {
            throw 'Incompatible matrices'
        }

        let result = new Matrix({height: m1.height, width: m2.width})
        let size = m1.width // equal to m.height
        let sum

        for (let i=0; i<result.height; i++) {
            for (let j=0; j<result.width; j++) {
                sum = 0
                for (let n=0; n<size; n++) {
                    sum += m1.matrix[i][n] * m2.matrix[n][j]
                }
                result.matrix[i][j] = sum
            }
        }

        return result
    }

    static transpose(m) {
        let result = new Matrix({height: m.width, width: m.height})

        for (let i=0; i<m.height; i++) {
            for (let j=0; j<m.width; j++) {
                result.matrix[j][i] = m.matrix[i][j]
            }
        }

        return result
    }
}


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
