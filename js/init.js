
var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 2, 3000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement);


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
Saturn.speed = Math.PI/1400;
Saturn.k = 0.6;
Saturn.t = 0;
Saturn.name = "Saturn";
scene.add(Saturn); 
planets.push(Saturn);

var Uranus = new radialObject(0, 18, 'i/Uranus.jpg', 0.6, 30);
Uranus.radius = 24;
Uranus.speed = Math.PI/1600;
Uranus.k = 0.6;
Uranus.t = 0;
Uranus.name = "Uranus";
scene.add(Uranus); 
planets.push(Uranus);

var Neptune = new radialObject(0, 18, 'i/Neptune.jpg', 0.5, 30);
Neptune.radius = 26;
Neptune.speed = Math.PI/1800;
Neptune.k = 0.6;
Neptune.t = 0;
Neptune.name = "Neptune";
scene.add(Neptune); 
planets.push(Neptune);




camRadius = 55;
camera.position.z = camRadius;
            
            
function render() { 
    requestAnimationFrame(render); 
                
    Sun.rotation.x += 0.01; 
    Sun.rotation.y += 0.01;
    
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
document.addEventListener( 'keydown', onDocumentKeyDown, false );
document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );
document.addEventListener( 'mouse', onDocumentMouseWheel, false );

function onDocumentKeyDown( event ) { 
    switch( event.keyCode ) {
        case 37: camera.position.x -= 0.3; event.preventDefault(); break;
        case 38: camera.position.y += 0.3; event.preventDefault(); break;
        case 39: camera.position.x += 0.3; event.preventDefault(); break;
        case 40: camera.position.y -= 0.3; event.preventDefault(); break;
    }
} 

function onDocumentMouseWheel( event ) { 
    event.preventDefault();
    offset = event.wheelDeltaY/100;
    camRadius -= offset;
    camera.position.z = camRadius;
}

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