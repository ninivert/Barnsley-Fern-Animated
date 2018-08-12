"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
    function Animation(duration, callback) {
        _classCallCheck(this, Animation);

        this.duration = duration;

        this.startTime = null;
        this.endTime = null;
        this.elapsedTime = null;
        this.running = false;
        this.nextFrame = null;

        this.callback = callback;
    }

    _createClass(Animation, [{
        key: "start",
        value: function start() {
            this.pause();
            this.startTime = Date.now();
            this.endTime = this.startTime + this.duration;
            this.elapsedTime = 0;
            this.running = true;
            this.next();
        }
    }, {
        key: "pause",
        value: function pause() {
            if (this.running) {
                this.nextFrame = cancelAnimationFrame(this.nextFrame);
                this.elapsedTime += Date.now() - this.startTime;
                this.running = false;
            }
        }
    }, {
        key: "unpause",
        value: function unpause() {
            if (!this.running) {
                this.startTime = Date.now();
                this.endTime = this.startTime + this.duration - this.elapsedTime;
                this.running = true;
                this.next();
            }
        }
    }, {
        key: "next",
        value: function next() {
            var progress = 1 - (this.endTime - Date.now()) / this.duration;

            if (progress < 1) {
                this.callback(progress);
                this.nextFrame = requestAnimationFrame(this.next.bind(this));
            } else {
                this.callback(1);
                this.pause();
            }
        }
    }]);

    return Animation;
}();

//
// TEST UNITS
//

// let counter = 0
// let animation = new Animation(3000, function(progress) {
//     counter++
//     console.log(`progress=${progress.toFixed(2)}, counter=${counter}`)
// })
// animation.start()
//
// setTimeout(function() {animation.pause()}, 1000)
// setTimeout(function() {animation.unpause()}, 3000)
// setTimeout(function() {animation.pause()}, 4000)
// setTimeout(function() {animation.unpause()}, 6000)