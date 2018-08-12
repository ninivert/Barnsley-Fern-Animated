DOM.controls.iterations.addEventListener('input', function() {
    let value = this.value
    value = Math.min(Math.max(this.min, value), this.max)
    this.value = value
    ITERATIONS = value
})

DOM.controls.pause.addEventListener('click', function() {
    if (RUNNING) {
        cancelAnimationFrame(NEXTFRAME)
        this.innerHTML = 'Play'
        RUNNING = false
    } else {
        requestAnimationFrame(drawFern)
        this.innerHTML = 'Pause'
        RUNNING = true
    }
})
