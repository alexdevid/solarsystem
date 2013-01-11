var _planets = new Array();
var __planets = new Array();
function Planet(name, x, y, z, radius, segments, rings, txt, angleSpeed, parent, starDistanse, speed ) {
    /**
     * характеристики планеты
     */
    if ( parent != null ) {
        this.parent = parent;
        this.centerX = parent.position.x;
        this.centerY = parent.position.y;
        this.centerZ = parent.position.Z;
    } else {
        this.centerX = 0;
        this.centerY = 0;
        this.centerZ = 0;
    }
    this.starDistance = starDistanse || 10;  //средняя удаленность от звезды
    this.speed = speed;         //скорость орбитального движения
    this.mass;          //масса 
    this.radius = radius;        //радиус
    this.angleSpeed = Math.PI/angleSpeed || Math.PI/29.8;
    this.zero = 0;
    
    /**
     характеристики объекта
     */
    this.texture = THREE.ImageUtils.loadTexture(txt, null);
    this.geometry = new THREE.SphereGeometry( radius, segments, rings );
    this.material = new THREE.MeshBasicMaterial({
        map: this.texture
    });

    this.obj = new THREE.Mesh(this.geometry, this.material);
    this.obj.name = name || "";
    this.obj.position.x = x || 0;
    this.obj.position.y = y || 0;
    this.obj.position.z = z || 0;
    
    _scene.add(this.obj);
    var orb;
    this.animate = function(){
        this.obj.rotation.x += 0.01; 
        this.obj.rotation.y += 0.01;
        
        if ( parent != null ) {
            this.centerX = parent.position.x;
            this.centerY = parent.position.y;
        } else {
            this.centerX = 0;
            this.centerY = 0;
        }
        
        this.obj.position.x = ( this.starDistance*Math.cos(this.zero) + this.centerX );
        this.obj.position.y = ( this.starDistance*Math.sin(this.zero) + this.centerY );
        this.zero += this.speed;
        
        //orb = new Particles(1, 1, new THREE.Vector3(1, 1, 1));
        //orb.position.x = this.obj.position.x;
        //orb.position.y = this.obj.position.y;
        
        
    };
    this.drawOrbit = function() {
        var material = new THREE.LineBasicMaterial( {
            color: 0xffffff, 
            opacity: 0.1
        } );

        var geometry = new THREE.Geometry();
        var zero = 0;
        for(var i = 0; i < 6283; i++ ) {
            geometry.vertices.push(new THREE.Vector3(this.starDistance*Math.cos(zero), this.starDistance*Math.sin(zero), 0));
            zero += this.speed;
        }   
        var line = new THREE.Line(geometry, material);
        _scene.add(line);

    }
    _planets.push(this);
    __planets.push(this.obj);
};
extend(Planet, Sphere);