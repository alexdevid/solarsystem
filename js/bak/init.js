if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var SCREEN_WIDTH = window.innerWidth-5;
var SCREEN_HEIGHT = window.innerHeight-5;

var scene = new THREE.Scene(); 

var camera = new THREE.PerspectiveCamera( 35, SCREEN_WIDTH / SCREEN_HEIGHT, 2, 10000 );
camRadius = 55;
camera.position.z = camRadius;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT); 
document.body.appendChild(renderer.domElement);
var projector = new THREE.Projector();


scene.add(particleSystem);


//<planets>
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
//</planets>



ellips = new THREE.EllipseCurv( aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise );










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

//X:=Sin(K)*500+XCenter; {ширина эллипса}
//Y:=Cos(K)*200;+YCenter{высота эллипса}



//<ui>
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
//</ui>
//
//
//<controls>
var controls = {

    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false

};

addControls();
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
//</controls>
//
_K = 0;
XCenter = 0;
YCenter = 0;

render();
function render() { 
    _K = _K=0.01;
    requestAnimationFrame(render);        
    Sun.rotation.x += 0.01; 
    Sun.rotation.y += 0.01;
    particleSystem.rotation.y += 0.0001;   
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
