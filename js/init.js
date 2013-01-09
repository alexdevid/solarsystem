function Constants() {
    this.camRadius = 55;
    
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

var foo = new testParticle(5500);
_scene.add(foo.object());


var earth = new Planet();
earth.animate();

function Planet() {
    this.texture = THREE.ImageUtils.loadTexture('i/Earth.jpg', null);
    this.geometry = new THREE.SphereGeometry( 3, 30, 30 );
    this.material = new THREE.MeshBasicMaterial({
        map: this.texture
    });

    this.obj = new THREE.Mesh(this.geometry, this.material);
    _scene.add(this.obj);
    
    this.animate = function(){
        console.log(this.obj.position.x);
        window.setTimeout(this.animate, 1000 / 60);
        this.obj.position.x += 1; 
        this.obj.position.y -= 1; 
    };
}

function _animate(){
    requestAnimationFrame(_animate); 
    this.obj.position.x += 1; 
}