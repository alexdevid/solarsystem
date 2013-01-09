
var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 2, 10000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement);

//controls
if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

var controls = {

    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false

};


addControls();
//animate();
function addControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    var radius = 14; // scalar value used to determine relative zoom distances
    controls.rotateSpeed = 1;
    controls.zoomSpeed = .5;
    controls.panSpeed = 1;

    controls.noZoom = false;
    controls.noPan = false;

    controls.staticMoving = false;
    controls.dynamicDampingFactor = 0.3;

    controls.minDistance = radius * 1.1;
    controls.maxDistance = radius * 25;

    controls.keys = [65, 83, 68]; // [ rotateKey, zoomKey, panKey ]
}
function animate() {

    // note: three.js includes requestAnimationFrame shim
    requestAnimationFrame(animate);
    //controls.update();
    renderer.render(scene, camera);

}

var particleCount = 15000,
particles = new THREE.Geometry();
var pMaterial = new THREE.ParticleBasicMaterial({
    color: 0xFFFFFF,
    size: 3,
    map: THREE.ImageUtils.loadTexture(
        "i/Flare.png"
        ),
    blending: THREE.AdditiveBlending,
    transparent: true
});

// now create the individual particles
for(var p = 0; p < particleCount; p++) {

    // create a particle with random
    // position values, -250 -> 250
    var pX = Math.random() * 500 - 250,
    pY = Math.random() * 500 - 250,
    pZ = Math.random() * 500 - 250,
    particle = new THREE.Vector3(pX, pY, pZ);

    // add it to the geometry
    particles.vertices.push(particle);
}

// create the particle system
var particleSystem =
new THREE.ParticleSystem(
    particles,
    pMaterial);

// add it to the scene
// create the particle variables
/*

*/

// also update the particle system to
// sort the particles which enables
// the behaviour we want
particleSystem.sortParticles = true;
scene.add(particleSystem);

function particleRender( context ) {
				
    // we get passed a reference to the canvas context
    context.beginPath();
    // and we just have to draw our shape at 0,0 - in this
    // case an arc from 0 to 2Pi radians or 360º - a full circle!
    context.arc( 0, 0, 1, 0,  Math.PI * 2, true );
    context.fill();
};

function generateSprite() {

    var canvas = document.createElement( 'canvas' );
    canvas.width = 45;
    canvas.height = 45;

    var context = canvas.getContext( '2d' );
    var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
    gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
    gradient.addColorStop( 0.2, 'rgba(0,255,255,1)' );
    gradient.addColorStop( 0.4, 'rgba(0,0,64,1)' );
    gradient.addColorStop( 1, 'rgba(0,0,0,1)' );

    context.fillStyle = gradient;
    context.fillRect( 0, 0, canvas.width, canvas.height );

    return canvas;

}


var light = new THREE.PointLight( 0xFFFF00 );
light.position.set( 0, 0, 0 );
scene.add( light );

var planets = [];

var Sun = new radialObject(0, 0, 'i/SunTexture_2048.png', 2, 20);
Sun.name = "Sun";
scene.add(Sun);  

var Mercury = new radialObject(0, 3, 'i/Mercury.jpg', 0.1, 30);
Mercury.radius = 3;
Mercury.speed = Math.PI/300;
Mercury.k = 0.2;
Mercury.t = 0;
Mercury.name = "Mercury";
scene.add(Mercury); 
planets.push(Mercury);

var Venus = new radialObject(0, 3, 'i/Venus.jpg', 0.3, 30);
Venus.radius = 6;
Venus.speed = Math.PI/500;
Venus.k = 0.3;
Venus.t = 0;
Venus.name = "Venus";
scene.add(Venus); 
planets.push(Venus);
var Earth = new radialObject(0, 10, 'i/Earth.jpg', 0.3, 30);
Earth.radius = 10;
Earth.speed = Math.PI/700;
Earth.k = 0.4;
Earth.t = 0;
Earth.name = "Earth";
scene.add(Earth); 
planets.push(Earth);

var Mars = new radialObject(0, 14, 'i/mars_texture.jpg', 0.2, 20);
Mars.radius = 14;
Mars.speed = Math.PI/900;
Mars.k = 0.5;
Mars.t = 0;
Mars.name = "Mars";
scene.add(Mars); 
planets.push(Mars);

var Jupiter = new radialObject(0, 18, 'i/Jupiter.jpg', 1, 30);
Jupiter.radius = 18;
Jupiter.speed = Math.PI/1200;
Jupiter.k = 0.6;
Jupiter.t = 0;
Jupiter.name = "Jupiter";
scene.add(Jupiter); 
planets.push(Jupiter);

var Saturn = new radialObject(0, 18, 'i/Saturn.jpg', 0.85, 30);
Saturn.radius = 22;
Saturn.speed = Math.PI/1600;
Saturn.k = 0.7;
Saturn.t = 0;
Saturn.name = "Saturn";
scene.add(Saturn); 
planets.push(Saturn);

var Uranus = new radialObject(0, 18, 'i/Uranus.jpg', 0.6, 30);
Uranus.radius = 24;
Uranus.speed = Math.PI/1900;
Uranus.k = 0.8;
Uranus.t = 0;
Uranus.name = "Uranus";
scene.add(Uranus); 
planets.push(Uranus);

var Neptune = new radialObject(0, 18, 'i/Neptune.jpg', 0.5, 30);
Neptune.radius = 26;
Neptune.speed = Math.PI/2200;
Neptune.k = 0.9;
Neptune.t = 0;
Neptune.name = "Neptune";
scene.add(Neptune); 
planets.push(Neptune);

/*
var geometry = new THREE.SphereGeometry( 3, 30, 30 );
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var obj = new THREE.Mesh(geometry, material);
obj.position.x =14;
obj.position.y = 4;
scene.add(obj); 
*/



camRadius = 55;
camera.position.z = camRadius;
            
            
function render() { 
    requestAnimationFrame(render); 
    particleSystem.rotation.y += 0.001;            
    Sun.rotation.x += 0.01; 
    Sun.rotation.y += 0.01;
    controls.update();
    for( var i = 0; i < planets.length; i++ ) {
        planets[i].rotation.x += 0.01; 
        planets[i].rotation.y += 0.01;
        planets[i].position.x = (planets[i].radius*Math.cos(planets[i].t));
        planets[i].position.y = (planets[i].radius*Math.sin(planets[i].t));
        planets[i].t += planets[i].speed;
        
            
        
    }
    renderer.render(scene, camera); 
} 
render();




/**
 * @param (object) property Список полей которые нужно добавить объекту
 * @param (bool) add        Если у объекта нет полей передаваемых в property, стоит ли их создать
 */
Object.prototype.setProperty = function(property, add) {
    if (add !== true) add = false;
    for (var key in property) {
        if (property.hasOwnProperty(key)) {
            if (typeof this[key] !== 'undefined' || add) {
                this[key] = property[key];
            }
        }
    }
    return this;
}


//mouse 
//document.addEventListener( 'mousedown', onDocumentMouseDown, false );
/*
document.addEventListener( 'keydown', onDocumentKeyDown, false );
document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );
document.addEventListener( 'mouse', onDocumentMouseWheel, false );

function onDocumentKeyDown( event ) { 
    switch( event.keyCode ) {
        case 37:
            camera.position.x -= 0.3;
            event.preventDefault();
            break;
        case 38:
            camera.position.y += 0.3;
            event.preventDefault();
            break;
        case 39:
            camera.position.x += 0.3;
            event.preventDefault();
            break;
        case 40:
            camera.position.y -= 0.3;
            event.preventDefault();
            break;
    }
} 

function onDocumentMouseWheel( event ) { 
    event.preventDefault();
    offset = event.wheelDeltaY/100;
    camRadius -= offset;
    camera.position.z = camRadius;
}
*/
/*формулa движения по эллипсоидной окружности
var rad = 200; //больший радиус
var xoff = 300; 
var yoff = 100; 
var pi = Math.PI; 
var inc = pi/50; 
var t=0; 
var k=0.3;//коэф уменьш меньшего радиуса

_root.onEnterFrame = function() {
ball._x =ballx= (rad*Math.cos(t)) + xoff;
ball._y =bally= (rad*k*Math.sin(t)) + yoff;
t+= inc; 
}*/
//stats
container = document.createElement( 'div' );
document.body.appendChild( container );
var info = document.createElement( 'div' );
var planetName = document.createElement( 'div' );

planetName.style.padding = '10px';
info.style.position = 'absolute';
info.style.top = '10px';
info.style.width = '100%';
info.style.color = '#ffffff';
info.style.textAlign = 'left';
info.innerHTML = 'solar system with three.js';
container.appendChild( info );
info.appendChild( planetName );


var stats = new Stats();
info.appendChild( stats.domElement );

setInterval( function () {

    stats.update();

}, 1000 / 60 );


projector = new THREE.Projector();
document.addEventListener( 'mousedown', onDocumentMouseDown, false );

function onDocumentMouseDown( event ) {

    event.preventDefault();

    
}





