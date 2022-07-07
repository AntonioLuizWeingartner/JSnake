/*import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color : 0x00FF00});
const cube = new THREE.Mesh(geometry, material);


scene.add(cube);

camera.position.z = 5;  


window.addEventListener('keydown', (ev : KeyboardEvent) => {
    const key = ev.key;
    switch (key) {
        case 'w':
            const vec = new THREE.Vector3();
            camera.getWorldDirection(vec);
            camera.position.add(vec.multiplyScalar(0.0001));
            break;
        case 'a':
            break;
        case 'd':
            break;
        case 's':
            break;
    }
});

window.addEventListener('click', (ev : MouseEvent) => {
    renderer.domElement.requestFullscreen().then(() => {
        renderer.domElement.requestPointerLock();
    })
});
camera.rotation.order = "YXZ"; // this is not the default
window.addEventListener('mousemove', (ev : MouseEvent) => {
    const dx = ev.movementX;
    const dy = ev.movementY;

    camera.rotation.x -= dy*0.001;  
    camera.rotation.y -= dx*0.001;
});




function main_loop() {
    renderer.render(scene, camera);
    requestAnimationFrame(main_loop);
}

main_loop()
*/
import { Engine } from './engine'

const eng = new Engine();
eng.main_loop(0);
