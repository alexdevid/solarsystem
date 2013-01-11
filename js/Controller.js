function Constants() {
    this.camRadius = 1500;
}
var Constants = new Constants();

/******************************************************************************/

if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var SCREEN_WIDTH = window.innerWidth-5;
var SCREEN_HEIGHT = window.innerHeight-5;
var _scene = new THREE.Scene(); 
var _camera = new THREE.PerspectiveCamera( 35, SCREEN_WIDTH / SCREEN_HEIGHT, 2, 10000 );
var _projector = new THREE.Projector();
var _renderer = new THREE.WebGLRenderer();
_renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT); 
_camera.position.z = Constants.camRadius;
document.body.appendChild(_renderer.domElement);

/******************************************************************************/

var sun   = new Planet("Sun", 0, 0, 0, 30, 30, 15, 'i/Sun.jpg', 29.8, null, 0, 0);
var mercury = new Planet("Mercury", 26, 0, 0, 0.7, 30, 15, 'i/Mercury.jpg', 29.8, sun.obj, 100, 0.005);
var earth = new Planet("Earth", 26, 0, 0, 1, 30, 15, 'i/Earth.jpg', 29.8, sun.obj, 200, 0.001);
var moon  = new Planet("Moon", 30, 0, 0, 0.3, 10, 15, 'i/Moon.jpg', 29.8, earth.obj, 15, 0.03);

var ptcl = new Particles(1100, 10, new THREE.Vector3(1100, 1100, 1100));

mercury.drawOrbit();
earth.drawOrbit();
moon.drawOrbit();