<!doctype html>
<html> 
    <head> 
        <title>My first Three.js app</title> 
        <style>
            html { 
                background: #000;
            }
            .overlay {
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
                background: url(i/sky/Nebula_Effects_Fractal_Stock_by_ineedfire.jpg) no-repeat;
                background-size: 100% 100%;
                opacity: .3;
                z-index: 1;
            }
            html, body, div { margin: 0; padding: 0;}
            canvas { margin: 0 auto; padding: 0; z-index: 10; position: relative;}
        </style> 
    </head> 
    <body> 
        <div class="overlay"></div>
        <script src = "js/three.js"></script>
        <script src = "js/TrackballControls.js"></script>
        <script src = "js/Detector.js"></script>
        <script src = "js/stats.min.js"></script>
        <script src = "js/point.js"></script> 
        <script src = "js/radialObject.js"></script> 
        <script src = "js/orbit.js"></script> 
        <script src = "js/Particles.js"></script> 
        <script src = "js/Particles.js"></script> 
        <script src = "js/init.js"></script> 
        <script>
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
                _controls.maxDistance = radius * 25;

                _controls.keys = [65, 83, 68]; // [ rotateKey, zoomKey, panKey ]
            }
            
            render();
            function render() { 
                requestAnimationFrame(render); 
                _controls.update();
                _renderer.render(_scene, _camera); 
            } 
        </script>
    </body> 
</html>