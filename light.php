<!DOCTYPE html>

<html>

<head>
    <title>Getting Started with Three.js</title>

    <script src="js/three.js"></script>
    <script type="text/javascript">
    window.onload = function() {

            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( 800, 600 );
            document.body.appendChild( renderer.domElement );

            var scene = new THREE.Scene();

            var camera = new THREE.PerspectiveCamera(
                                            35,             // Field of view
                                            800 / 600,      // Aspect ratio
                                            0.1,            // Near plane
                                            10000           // Far plane
                                        );
            camera.position.set( -15, 10, 10 );
            camera.lookAt( scene.position );

            scene.add( camera );

            var cube = new THREE.Mesh(
                                    new THREE.CubeGeometry( 5, 5, 5 ),
                                    new THREE.MeshLambertMaterial( { color: 0xFF0000 } )
                                );
            scene.add( cube );

            var light = new THREE.PointLight( 0xFFFF00 );
            light.position.set( 10, 0, 10 );
            scene.add( light );

            renderer.render( scene, camera );

        };
    </script>
</head>

<body></body>

</html>