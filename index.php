<!doctype html>
<html> 
    <head> 
        <title>My first Three.js app</title> 
        <link rel="stylesheet" href="css/main.css">
        <!--    System      -->
        <script src = "js/System/Three.js"></script>
        <script src = "js/System/TrackballControls.js"></script>
        <script src = "js/System/Detector.js"></script>
        <script src = "js/System/stats.min.js"></script>
        <!--    /System      -->
    </head> 
    <body> 
        <!--    Classes     -->
        <script src = "js/libs/lib.planets.js"></script> 
        <script src = "js/Classes/BaseClass.js"></script> 
        <script src = "js/Classes/Planet.js"></script> 
        <script src = "js/Classes/Particles.js"></script> 
        <!--    /Classes      -->
        
        <script src = "js/Controller.js"></script>
        
        <script>
            container = document.createElement( 'div' );
            document.body.appendChild( container );
            var info = document.createElement( 'div' );
            var planetName = document.createElement( 'div' );
            container.style.zIndex = 100;
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

            
            var _controls = {

                moveForward: false,
                moveBackward: false,
                moveLeft: false,
                moveRight: false

            };

            addControls();
            function addControls() {
                _controls = new THREE.TrackballControls(_camera, _renderer.domElement);
                var radius = 14; // scalar value used to determine relative zoom distances
                _controls.rotateSpeed = 1;
                _controls.zoomSpeed = .5;
                _controls.panSpeed = 1;

                _controls.noZoom = false;
                _controls.noPan = false;

                _controls.staticMoving = false;
                _controls.dynamicDampingFactor = 0.3;

                _controls.minDistance = radius * 1.1;
                _controls.maxDistance = radius * 5500;

                _controls.keys = [65, 83, 68]; // [ rotateKey, zoomKey, panKey ]
            }
            
            var glow = false;
            render();
            function render() { 
                requestAnimationFrame(render); 
                _controls.update();
                stats.update();
                
                for ( var i = 0; i < _planets.length; i++ ){
                    _planets[i].animate();
                }
                if ( _camera.position.z > 1501 && glow == false ) {
                    console.log(_camera.position.z);
                    glow = true;
                }
                ptcl.sortParticles = true;
                _renderer.render(_scene, _camera);
            } 
        </script>
        <div class="overlay"></div>
    </body> 
</html>