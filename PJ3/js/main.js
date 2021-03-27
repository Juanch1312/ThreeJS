var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera, renderer.domElement);

//Create the shape
var geometry = new THREE.BoxGeometry(2, 2, 2);
var cubeMaterials = [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/img/img.jpg'), side: THREE.DoubleSide }), //RIGHT SIDE
    new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('/img/img.jpg'), side: THREE.DoubleSide }), //LEFT SIDE
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('/img/img.jpg'), side: THREE.DoubleSide }), //TOP SIDE
    new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load('/img/img.jpg'), side: THREE.DoubleSide }), //BOTTOM SIDE
    new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('/img/img.jpg'), side: THREE.DoubleSide }), //FRONT SIDE
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('/img/img.jpg'), side: THREE.DoubleSide }) //BACK SIDE
];

//Create a material, colour or image texture
var material = new THREE.MeshFaceMaterial(cubeMaterials);
var cube = new THREE.Mesh(geometry, cubeMaterials);
scene.add(cube);

camera.position.z = 3;

var ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(ambientLight);

//game logic
var update = function() {
    //cube.rotation.x += 0.01;
    //cube.rotation.z += 0.005;
};

//Draw scene
var render = function() {
    renderer.render(scene, camera);

};

//Run game loop (update, render, repeat)
var GameLoop = function() {
    requestAnimationFrame(GameLoop);
    update();
    render();
};

GameLoop();