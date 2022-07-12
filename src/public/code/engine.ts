import { time } from 'console';
import { Camera, PerspectiveCamera, Scene, WebGLRenderer } from 'three'


let engine_instantiated = false;

export class Engine {
    
    private scene : Scene;
    private default_camera : Camera;
    private current_camera : Camera;
    private renderer : WebGLRenderer;

    private last_frame_call : number = 0;
    private frames_per_second : number = 30;
    private frame_duration : number = (1/this.frames_per_second)*1000; //duration of each frame
    private next_frame : number = 0; //start of the next frame
    private max_frame_skip : number = 0; //max allowed number of frame skips in a row.
    private current_frame_skip : number = 0;

    private ensure_singleton() {
        if (!engine_instantiated) {
            engine_instantiated = true;
        } else {
            throw "Only 1 Engine instance is allowed.";
        }
    }

    private webgl_check() {
        //check if web browser supports webgl
    }

    constructor() {
        this.ensure_singleton();

        this.scene = new Scene();
        this.default_camera = new PerspectiveCamera(90, window.innerWidth 
            / window.innerHeight, 0.1, 1000);
        this.current_camera = this.default_camera;
        this.renderer = new WebGLRenderer();
        
        this.register_event_handlers();
    }

    private register_event_handlers() {
        //event handlers
    }

    private render(interpolation : number) {
        console.log(interpolation);
        this.renderer.render(this.scene, this.current_camera);
    }

    private update() {

    }

    public main_loop(timestamp : number) {

        if (timestamp - this.last_frame_call) {
            //fixed step loop
            this.last_frame_call = timestamp;
            this.next_frame = timestamp + this.frame_duration;
            
            this.update();

            const now = performance.now();

            if (now >= this.next_frame && this.current_frame_skip < this.max_frame_skip) {
                this.current_frame_skip += 1;
                console.warn("Frame skipped due to poor performance.");
            } else {
                this.current_frame_skip = 0;
                const interpolation = (now-timestamp)/this.frame_duration //can be greater than 1 when current_frame_skip >= this.max_frame_skip
                if (interpolation >= 1) {
                    console.log("Extrapolation in the rendering.");
                }
                this.render(interpolation)
            }
        }

        requestAnimationFrame(this.main_loop.bind(this));
    }
};