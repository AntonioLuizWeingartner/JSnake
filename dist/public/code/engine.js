"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const three_1 = require("three");
let engine_instantiated = false;
class Engine {
    constructor() {
        this.last_frame_call = 0;
        this.frames_per_second = 30;
        this.frame_duration = (1 / this.frames_per_second) * 1000; //duration of each frame
        this.next_frame = 0; //start of the next frame
        this.max_frame_skip = 0; //max allowed number of frame skips in a row.
        this.current_frame_skip = 0;
        this.ensure_singleton();
        this.scene = new three_1.Scene();
        this.default_camera = new three_1.PerspectiveCamera(90, window.innerWidth
            / window.innerHeight, 0.1, 1000);
        this.current_camera = this.default_camera;
        this.renderer = new three_1.WebGLRenderer();
        this.register_event_handlers();
    }
    ensure_singleton() {
        if (!engine_instantiated) {
            engine_instantiated = true;
        }
        else {
            throw "Only 1 Engine instance is allowed.";
        }
    }
    webgl_check() {
        //check if web browser supports webgl
    }
    register_event_handlers() {
        //event handlers
    }
    render(interpolation) {
        console.log(interpolation);
    }
    update() {
    }
    main_loop(timestamp) {
        if (timestamp - this.last_frame_call) {
            //fixed step loop
            this.last_frame_call = timestamp;
            this.next_frame = timestamp + this.frame_duration;
            this.update();
            const now = performance.now();
            if (now >= this.next_frame && this.current_frame_skip < this.max_frame_skip) {
                this.current_frame_skip += 1;
                console.warn("Frame skipped due to poor performance.");
            }
            else {
                this.current_frame_skip = 0;
                const interpolation = (now - timestamp) / this.frame_duration; //can be greater than 1 when current_frame_skip >= this.max_frame_skip
                if (interpolation >= 1) {
                    console.log("Extrapolation in the rendering.");
                }
                this.render(interpolation);
            }
        }
        requestAnimationFrame(this.main_loop.bind(this));
    }
}
exports.Engine = Engine;
;
