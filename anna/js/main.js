import * as THREE from "./three.module.js";
import { GLTFLoader } from "./GLTFLoader.js";
import { OrbitControls } from "./OrbitControls.js";
import { SSRPass } from "./SSRPass.js";
import { EffectComposer } from './EffectComposer.js';

let scene, camera, renderer, controls, model, hemilight, light, composer, ssrPass, podest;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color("#fafafa");
    scene.fog = new THREE.FogExp2( "#fafafa", .04 );
    // scene.fog = new THREE.Fog( "#fafafa", 5, 50 );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.4;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
    // document.body.appendChild( renderer.domElement );
    document.getElementById('model').appendChild(renderer.domElement);
    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(0, 1, 5);
    controls = new OrbitControls( camera, renderer.domElement );
    controls.target = new THREE.Vector3(0,1,0);
    controls.maxAzimuthAngle = 1;
    controls.minAzimuthAngle = -1;
    controls.minDistance = 1;
    controls.maxDistance = 5.5;
    controls.maxPolarAngle = 3;
    controls.minPolarAngle = 0;
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.dampingFactor = .05;
    controls.update();
    camera.lookAt(new THREE.Vector3(0,1,0));


    new GLTFLoader().load("./models/ubranie.glb", result => {
        let models = result.scene.children;
        // camera = result.cameras[0];
        console.log(result.scene);
        result.scene.traverse( function( node ) {
            if ( node.isMesh ) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
            if( node.material && node.material.map ) node.material.map.anisotropy = 16;
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

    // hemilight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 10); // soft white light
    hemilight = new THREE.HemisphereLight("#ffffff", "#ffffff", 2*factor); // soft white light
    scene.add( hemilight );


    let spotlight = new THREE.SpotLight("#ffffff", 20*factor);
    spotlight.position.set( -3, 3, 0 );
    spotlight.castShadow = true;
    spotlight.angle = .7
    spotlight.penumbra = 1
    spotlight.radius = 5
    spotlight.shadow.mapSize.width = 1024*4;
    spotlight.shadow.mapSize.height = 1024*4;
    // spotlight.decay =1
    spotlight.shadow.camera.near = .1;
    spotlight.shadow.camera.far = 10;
    spotlight.shadow.camera.fov = 30;
    scene.add(spotlight)

    spotlight = new THREE.SpotLight("#ffffff", 40*factor);
    spotlight.position.set( 1, 3, 4 );
    spotlight.castShadow = true;
    spotlight.angle = .7
    spotlight.penumbra = 1
    spotlight.shadow.radius = 5.0
    // spotlight.decay =.5
    spotlight.shadow.mapSize.width = 1024*4;
    spotlight.shadow.mapSize.height = 1024*4;
    spotlight.shadow.camera.near = 1;
    spotlight.shadow.camera.far = 10;
    spotlight.shadow.camera.fov = 30;
    // spotlight.shadow.radius = 10.0;
    // spotlight.shadow.focus = 1;
    scene.add(spotlight)
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

    podest = scene.getObjectByName( "podest" );

    animate();
}

function animate() {
    // composer.render();
    renderer.render( scene,camera );
    if (podest) {
        podest.rotation.y += 0.002;
    }

	// spotlight.position.set(
    //     camera.position.x + 10,
    //     camera.position.y + 10,
    //     camera.position.z + 10,
    //     )
    requestAnimationFrame( animate );

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
}
init();








