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
            
        </script>
    </body> 
</html>