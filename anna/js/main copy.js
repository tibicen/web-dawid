import * as THREE from "./three.module.js";
import { GLTFLoader } from "./GLTFLoader.js";
import { OrbitControls } from "./OrbitControls.js";


let scene, camera, renderer, controls, model, hemilight, spotlight;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2.3
    renderer.shadowMap.enabled = true;
    document.body.appendChild( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(0, 50,50);
    controls = new OrbitControls( camera, renderer.domElement );
    controls.update();

    // const loader = new GLTFLoader();
    // loader.load( './models/model.glb', function ( gltf ) {
    //     scene.add( gltf.scene );
    // }, undefined, function ( error ) {
    //     console.error( error );
    // } );

    new GLTFLoader().load("./models/model.glb", result => {
        let models = result.scene.children;
        models.forEach(element => {
            if (element.isMesh) {
                element.castShadow = true;
                element.receiveShadow = true;
            }
            
        });
        scene.add(result.scene);
        // model = result.scene.children[0];
        // scene.add(model);
    });

    hemilight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4); // soft white light
    scene.add( hemilight );

    spotlight = new THREE.DirectionalLight(0xffa95c, 4);
    spotlight.castShadow = true;
    spotlight.shadow.bias = -0.001;
    spotlight.shadow.mapSize.width = 1024*4;
    spotlight.shadow.mapSize.height = 1024*4;
    scene.add(spotlight);

    

    animate();
}

function animate() {
    renderer.render( scene, camera );
	spotlight.position.set(
        camera.position.x + 10,
        camera.position.y + 10,
        camera.position.z + 10,
        )
    requestAnimationFrame( animate );

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // const canvas = renderer.domElement;
    // camera.aspect = canvas.clientWidth / canvas.clientHeight;
    // camera.updateProjectionMatrix();
    controls.update();
}
init();
// GEOMETRY
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshPhysicalMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );


// // LIGHTS
// const light = new THREE.AmbientLight( "white" ); // soft white light
// scene.add( light );

// const light2 = new THREE.DirectionalLight({color: "#000", intensity:1}); 
// // scene.add( light2 );







