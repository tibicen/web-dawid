import * as THREE from "./three.module.js";
import { GLTFLoader } from "./GLTFLoader.js";
import { OrbitControls } from "./OrbitControls.js";
import { SSRPass } from "./SSRPass.js";
import { EffectComposer } from './EffectComposer.js';

let scene, camera, renderer, controls, model, hemilight, light, composer, ssrPass, podest, spotlight;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color("#fafafa");
    scene.fog = new THREE.FogExp2("#fafafa", .04);
    // scene.fog = new THREE.Fog( "#fafafa", 5, 50 );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.4;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    // document.body.appendChild( renderer.domElement );
    document.getElementById('model').appendChild(renderer.domElement);
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1, 5);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 1, 0);
    // controls.maxAzimuthAngle = 1;
    // controls.minAzimuthAngle = -1;
    controls.minDistance = 1;
    controls.maxDistance = 5.5;
    controls.maxPolarAngle = 1.75;
    controls.minPolarAngle = 0;
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.dampingFactor = .05;
    controls.update();
    camera.lookAt(new THREE.Vector3(0, 1, 0));


    new GLTFLoader().load("./models/ubranie.glb", result => {
        let models = result.scene.children;
        // camera = result.cameras[0];
        // console.log(result.scene);
        result.scene.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
            if (node.material && node.material.map) node.material.map.anisotropy = 16;
            if (node.name == 'podest') podest = node;
        });
        // models.forEach(element => {
        //     if (element.isMesh) {
        //         element.castShadow = true;
        //         element.receiveShadow = true;
        //         if(element.material.map) element.material.map.anisotropy = 16;
        //         element.children.forEach(child => {
        //             child.castShadow = true;
        //             // child.receiveShadow = true;
        //         });
        //     } else if (element.isPointLight) {
        //         element.castShadow = true;
        //     }
        // });
        scene.add(result.scene);
    });

    let factor = .5

    hemilight = new THREE.HemisphereLight("#ffffff", "#ffffff", 1);
    scene.add(hemilight);

    let lights = [
        {power: 10, x: -3, y: 3, z: 0},
        {power: 20, x: 1, y: 3, z: 4,}
    ]
    lights.forEach(params => {
        spotlight = new THREE.SpotLight("#ffffff", params.power);
        spotlight.position.set(params.x, params.y, params.z);
        spotlight.castShadow = true;
        spotlight.angle = .7;
        spotlight.penumbra = 1;
        spotlight.shadow.bias = -0.001;
        spotlight.shadow.radius = 4;
        // spotlight.decay = 1
        spotlight.shadow.mapSize.width = 1024;
        spotlight.shadow.mapSize.height = 1024;
        spotlight.shadow.camera.near = 3;
        spotlight.shadow.camera.far = 10;
        spotlight.shadow.camera.fov = 30;
        scene.add(spotlight)

    });


    // light = new THREE.DirectionalLight("#ffffff", 4);
    // light.castShadow = true;
    // light.shadow.bias = -0.0001;
    // light.shadow.mapSize.width = 1024*4;
    // light.shadow.mapSize.height = 1024*4;
    // light.shadow.camera.near = 5; // default
    // light.shadow.camera.far = 100; // default
    // light.position.set(5,-10,3);
    // scene.add(light);

    // composer = new EffectComposer( renderer );

    podest = scene.getObjectByName("podest");

    animate();
}

function animate() {
    let focus_point = new THREE.Vector3(0, 1, 0);
    // composer.render();
    renderer.render(scene, camera);
    camera.position.sub(focus_point);
    camera.position.applyAxisAngle(new THREE.Vector3(0,1,0), .002);
    camera.position.add(focus_point);
    camera.lookAt(focus_point);
    // camera.rotateOnAxis(new THREE.Vector3(0,1,0), .002);
    requestAnimationFrame(animate);
}
init();








